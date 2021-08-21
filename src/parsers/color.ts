import getColors from 'get-css-colors'

interface CountCase {
  name: string;
  count: number;
}

function countCases (array: Array<string>, name: string) {
  return {
    name,
    count: array.filter((el) => el === name).length
  }
}

function sortByCount (items:Array<CountCase>) {
  return items.sort((a, b) => {
    return b.count - a.count
  })
}

function getAllColors (properties) {
  return [
    ...properties.background,
    ...properties.fill,
    ...properties['background-color']
  ]
}

function parseColor (properties: { background: Array<string>}) {
  const allColors = getAllColors(properties)
  const uniqueValues = Array.from(new Set(allColors)).sort()

  const uniqueColors = uniqueValues.filter(getColors)

  const colors = uniqueColors.map(color => {
    return countCases(allColors, color)
  })

  const sortedColors = sortByCount(colors)

  console.log({ sortedColors })

  return sortedColors
}

export { parseColor }
