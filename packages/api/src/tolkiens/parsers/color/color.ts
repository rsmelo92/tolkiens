import getColors from 'get-css-colors'
import { colord } from "colord";

import { formatArray, sortByCount } from '../../utils'

import {
  testBlackAndWhiteVariations,
  countCases,
  getAllColors,
  unveilBaseTokens,
  unveilNeutralTokens
} from './color_utils'

function parseColor (properties: Properties) {
  const allColors = getAllColors(properties)

  const allHex = allColors.map(c => {
    const hex = colord(c).toHex()
    console.log({ c });
    console.log({ hex });
    return hex
  })

  const uniqueValues = Array.from(new Set(allHex)).sort()
  const uniqueColors = uniqueValues.filter(getColors)

  console.log({uniqueValues});
  console.log({uniqueColors});
  

  return []
}

export { parseColor }
