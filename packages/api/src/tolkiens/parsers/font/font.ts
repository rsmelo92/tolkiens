import { formatArray } from './font_utils'

import { parseFontFamily } from './family'
import { parseFontWeight } from './weight'

function parseFont (properties: Properties) {
  const fontFamilyJson = parseFontFamily(properties['font-family'])
  console.log({ fontFamilyJson: JSON.stringify(fontFamilyJson, null, 2) });

  const fontWeightJson = parseFontWeight(properties['font-weight'])
  console.log({ fontWeightJson: JSON.stringify(fontWeightJson, null, 2) });

  const fontSize = formatArray(properties['font-size'])
  const lineHeight = formatArray(properties['line-height'])
  const letterSpacing = formatArray(properties['letter-spacing'])

  console.log({fontSize});
  console.log({lineHeight});
  console.log({letterSpacing});
  

  return []
}

export { parseFont }
