import getColors from 'get-css-colors'

import {
  testBlackAndWhiteVariations,
  countCases,
  sortByCount,
  getAllColors,
  unveilBaseTokens,
  unveilNeutralTokens
} from './color_utils'

function parseColor (properties: Properties) {
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
