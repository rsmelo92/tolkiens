import { formatArray } from './font_utils'

import { parseFontFamily } from './family'
import { parseFontWeight } from './weight'
import { parseFontSize } from './size'

function parseFont (properties: Properties) {
  const fontFamilyJson = parseFontFamily(properties['font-family'])
  console.log({ fontFamilyJson: JSON.stringify(fontFamilyJson, null, 2) });

  const fontWeightJson = parseFontWeight(properties['font-weight'])
  console.log({ fontWeightJson: JSON.stringify(fontWeightJson, null, 2) });
  
  const fontSizeJson = parseFontSize(properties['font-size'])
  console.log({ fontSizeJson: JSON.stringify(fontSizeJson, null, 2) });
  
  
  
  
  const lineHeight = formatArray(properties['line-height'])
  const letterSpacing = formatArray(properties['letter-spacing'])

  console.log({lineHeight});
  console.log({letterSpacing});
  

  return []
}

export { parseFont }
