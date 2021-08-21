
import jsdom from 'jsdom'
import cssstats from 'cssstats'

import { fetchCode } from './'
import { parseColor } from './parsers/color'

function handleCss (css: string) {
  const stats = cssstats(css)
  const uniqueColors = stats.declarations.getUniquePropertyCount('color')
  if (uniqueColors > 0) {
    console.log(stats.declarations.properties)
    parseColor(stats.declarations.properties)
  }
}

function handleHtml (html: string) {
  const { JSDOM } = jsdom
  const dom = new JSDOM(html)
  const stylesheets = dom?.window?.document?.querySelectorAll('link[rel="stylesheet"]')
  if (stylesheets && stylesheets.length > 0) {
    stylesheets.forEach(({ href }) => {
      if (href.includes('.css')) {
        fetchCode(href, (css:string) => {
          handleCss(css)
        })
      }
    })
  }
}

export { handleHtml, handleCss }
