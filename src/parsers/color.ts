import getColors from 'get-css-colors'

interface CountCase {
  name: string;
  count: number;
}

function testBlackAndWhiteVariations (color: string) {
  const regex = /^#fff$|#ffffff|white|^#000$|#000000|black|(([0-9]?[0-9]?[0-9],))\2+/gmi
  return regex.test(color)
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

function unveilBaseTokens (colors) {
  if (colors && colors.length > 0) {
    const primary = colors && colors[0] ? { value: colors[0].name } : {}
    const secondary = colors && colors[1] ? { value: colors[1].name } : {}
    const interactive = colors && colors[2] ? { value: colors[2].name } : {}
    const common = colors && colors[3] ? { value: colors[3].name } : {}

    return { primary, secondary, interactive, common }
  }
}

function unveilNeutralTokens (colors) {
  if (colors && colors.length > 0) {
    const one = colors && colors[0] ? { value: colors[0].name } : {}
    const two = colors && colors[1] ? { value: colors[1].name } : {}
    const three = colors && colors[2] ? { value: colors[2].name } : {}
    const four = colors && colors[3] ? { value: colors[3].name } : {}
    const five = colors && colors[3] ? { value: colors[4].name } : {}
    const six = colors && colors[3] ? { value: colors[5].name } : {}
    const seven = colors && colors[3] ? { value: colors[6].name } : {}

    return {
      '01': one,
      '02': two,
      '03': three,
      '04': four,
      '05': five,
      '06': six,
      '07': seven
    }
  }
}

function parseColor (properties: { background: Array<string>}) {
  const allColors = getAllColors(properties)
  const uniqueValues = Array.from(new Set(allColors)).sort()

  const uniqueColors = uniqueValues.filter(getColors)

  const colors = uniqueColors.map(color => {
    return countCases(allColors, color)
  })

  const sortedColors = sortByCount(colors)

  const neutralColors = sortedColors.filter(({ name }) => testBlackAndWhiteVariations(name))
  const noNeutralColors = sortedColors.filter(({ name }) => !testBlackAndWhiteVariations(name))

  const base = unveilBaseTokens(noNeutralColors)
  const neutral = unveilNeutralTokens(neutralColors)

  const baseJson = {
    color: {
      base
    }
  }

  const neutralJson = {
    color: {
      neutral
    }
  }

  return [baseJson, neutralJson]
}

export { parseColor }
