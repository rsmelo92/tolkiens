function testBlackAndWhiteVariations (color: string) {
  const regex = /^#fff$|#ffffff|white|^#000$|#000000|black|(([0-9]?[0-9]?[0-9],))\2+/gmi
  return regex.test(color)
}

function countCases (array: Array<string>, name: string) {
  const count = array.filter((el) => el === name).length
  return {
    name,
    count
  }
}

function sortByCount (items: Array<CountCase>) {
  return items.sort((a, b) => {
    return b.count - a.count
  })
}

function getAllColors (properties: Properties) {
  return [
    ...properties.background,
    ...properties.fill,
    ...properties['background-color']
  ]
}

function unveilBaseTokens (colors: Colors) {
  if (colors && colors.length > 0) {
    const primary = colors && colors[0] ? { primary: { value: colors[0].name } } : {}
    const secondary = colors && colors[1] ? { secondary: { value: colors[1].name } } : {}
    const interactive = colors && colors[2] ? { interactive: { value: colors[2].name } } : {}
    const common = colors && colors[3] ? { common: { value: colors[3].name } } : {}

    return {
      ...primary,
      ...secondary,
      ...interactive,
      ...common
    }
  }
}

function unveilNeutralTokens (colors: Colors) {
  if (colors && colors.length > 0) {
    const one = colors && colors[0] ? { '01': { value: colors[0].name } } : {}
    const two = colors && colors[1] ? { '02': { value: colors[1].name } } : {}
    const three = colors && colors[2] ? { '03': { value: colors[2].name } } : {}
    const four = colors && colors[3] ? { '04': { value: colors[3].name } } : {}
    const five = colors && colors[4] ? { '05': { value: colors[4].name } } : {}
    const six = colors && colors[5] ? { '06': { value: colors[5].name } } : {}
    const seven = colors && colors[6] ? { '07': { value: colors[6].name } } : {}

    return {
      ...one,
      ...two,
      ...three,
      ...four,
      ...five,
      ...six,
      ...seven
    }
  }
}

export {
  testBlackAndWhiteVariations,
  countCases,
  sortByCount,
  getAllColors,
  unveilBaseTokens,
  unveilNeutralTokens
}
