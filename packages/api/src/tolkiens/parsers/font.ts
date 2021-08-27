const cleanString = (str: string) => str.replace(/['"]+/g, '')
const getUniqueArray = (array: Array<string>) => Array.from(new Set(array))
const countOccurrences = (arr: Array<string>, val: string) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

function formatArray(array: Array<string>) {
  const cleanedArray = array.map(cleanString)
  const cleanedArrayUnique = getUniqueArray(cleanedArray)
  const cleanedArrayUniqueCount = cleanedArrayUnique.map(value => {
    const count = countOccurrences(cleanedArray, value)
    return { value, count }
  }).sort((a, b) => b.count - a.count)

  return cleanedArrayUniqueCount
}

function parseFont (properties: Properties) {
  const fontFamily = formatArray(properties['font-family'])

  const fontFamilyJson = {
    "font": {
      "family": {
        "default": { value: fontFamily[0].value },
        ...fontFamily[1] ? { "secondary": { value: fontFamily[1].value } } : {},
      }
    }
  }

  console.log({ fontFamilyJson });
  

  const fontWeight = formatArray(properties['font-weight'])
  const fontSize = formatArray(properties['font-size'])
  const lineHeight = formatArray(properties['line-height'])
  const letterSpacing = formatArray(properties['letter-spacing'])

  console.log({fontWeight});
  console.log({fontSize});
  console.log({lineHeight});
  console.log({letterSpacing});
  

  return []
}

export { parseFont }
