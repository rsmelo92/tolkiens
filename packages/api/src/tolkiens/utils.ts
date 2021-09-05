import puppeteer from 'puppeteer';

export interface Value {
  value: string;
  count: number;
} 

const NEUTRAL_REGEX = /inherit|initial|none|unset|var\(|revert|icons|transparent|smaller|larger|currentColor/

const sortAlphabetically =  (array: Array<Value>) => array.sort((a, b) => {
  if(a.value < b.value) { return -1; }
  if(a.value > b.value) { return 1; }
  return 0;
})

const sortByCount = (array: Array<Value>) => array.sort((a, b) => b.count - a.count)

const cleanString = (str: string) => str.replace(/['"]+/g, '')
const getUniqueArray = (array: Array<string>) => Array.from(new Set(array))
const countOccurrences = (arr: Array<string>, val: string) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const filterNeutralKeyWords = (str: string) => !NEUTRAL_REGEX.test(str) 

function formatArray(array: Array<string>) {
  const cleanedArray = array.map(cleanString)
  const filteredArray = cleanedArray.filter(filterNeutralKeyWords)
  const cleanedArrayUnique = getUniqueArray(filteredArray)
  const cleanedArrayUniqueCount = cleanedArrayUnique.map(value => {
    const count = countOccurrences(cleanedArray, value)
    return { value, count }
  })

  return cleanedArrayUniqueCount
}

async function extractCSS(url: string) {
	const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
	const page = await browser.newPage()
	await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:85.0) Gecko/20100101 Firefox/85.0')
	await page.coverage.startCSSCoverage()

  const response = await page.goto(url)

	// Make sure that we only try to extract CSS from valid pages.
	// Bail out if the response is an invalid request (400, 500)
	if (response.status() >= 400) {
		await browser.close() // Don't leave any resources behind

		return Promise.reject(
			new Error(`${url} ${response.status()} ${response.statusText()}`)
		)
	}

	// If the response is a CSS file, return that file
	// instead of running our complicated setup
	const headers = response.headers()

	if (headers['content-type'].includes('text/css')) {
		const css = await response.text()
		return Promise.resolve(css)
	}

	const coverage = await page.coverage.stopCSSCoverage()

	// Get all CSS generated with the CSSStyleSheet API
	// This is primarily for CSS-in-JS solutions
	// See: https://developer.mozilla.org/en-US/docs/Web/API/CSSRule/cssText
	const styleSheetsApiCss = await page.evaluate(() => {
		return Array.from(document.styleSheets)
			// Only take the stylesheets without href, because those with href are
			// <link> tags, and we already tackled those with the Coverage API
			.filter(stylesheet => stylesheet.href === null)
			.map(stylesheet => {
				return {
					type: '',
					// type: stylesheet?.ownerNode?.tagName?.toLowerCase(),
					href: stylesheet.href || document.location.href,
					css: Array.from(stylesheet.cssRules).map(({cssText}) => cssText).join('\n')
				}
			})
	})

	// Get all inline styles: <element style="">
	// This creates a new CSSRule for every inline style
	// attribute it encounters.
	//
	// Example:
	//
	// HTML:
	//    <h1 style="color: red;">Text</h1>
	//
	// CSSRule:
	//    [x-extract-css-inline-style] { color: red; }
	//
	const inlineCssRules = await page.evaluate(() => {
		return Array.from(document.querySelectorAll('[style]'))
			.map(element => element.getAttribute('style'))
			// Filter out empty style="" attributes
			.filter(Boolean)
	})
	const inlineCss = inlineCssRules
		.map((rule: string | null) => `[x-extract-css-inline-style] { ${rule} }`)
		.map((css: string) => ({ type: 'inline', href: url, css }))

	const links = coverage
		// Filter out the <style> tags that were found in the coverage
		// report since we've conducted our own search for them.
		// A coverage CSS item with the same url as the url of the page
		// we requested is an indication that this was a <style> tag
		.filter((entry: { url: string }) => entry.url !== url)
		.map((entry: { url: string, text: string }) => ({
			href: entry.url,
			css: entry.text,
			type: 'link-or-import'
		}))

	await browser.close()

	const css = links
		.concat(styleSheetsApiCss)
		.concat(inlineCss)

    // ... or return all CSS as a single String
	return Promise.resolve(
		css
			.map(({css}: { css: string }) => css)
			.join('\n')
	)
}

export {
  formatArray,
  sortByCount,
  sortAlphabetically,
  filterNeutralKeyWords,
  extractCSS,
}
