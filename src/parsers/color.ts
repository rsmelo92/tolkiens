interface CountCase {
  name: string;
  count: number;
}

function matchHexOrRgb (color:string, check?: 'hex' | 'rgb') {
  const isHex = /#[0-9a-f]{3}([0-9a-f]{3})?$/.test(color)
  if (check === 'hex') {
    return isHex
  }

  const isRgb = /rgb/.test(color)
  if (check === 'rgb') {
    return isRgb
  }

  return isHex || isRgb
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
  return [...properties.background, ...properties.fill, ...properties['background-color']]
}

function parseColor (properties: { background: Array<string>}) {
  const allColors = getAllColors(properties)
  const uniqueValues = Array.from(new Set(allColors)).sort()

  const uniqueColors = uniqueValues.filter(v => matchHexOrRgb(v))

  const colors = uniqueColors.map(hex => {
    return countCases(allColors, hex)
  })

  const sortedColors = sortByCount(colors)

  console.log({ sortedColors })

  return sortedColors
}

export { parseColor }
