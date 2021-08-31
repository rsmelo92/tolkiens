import { parseFontFamily } from './family'
import { parseFontWeight } from './weight'
import { parseFontSize } from './size'
import { parseLineHeight } from './line_height'
import { parseTextColor } from './text_color'

function parseFont (properties: Properties) {
  console.log({properties});
  
  const fontFamilyJson = parseFontFamily(properties['font-family'])
  console.log({ fontFamilyJson: JSON.stringify(fontFamilyJson, null, 2) });

  const fontWeightJson = parseFontWeight(properties['font-weight'])
  console.log({ fontWeightJson: JSON.stringify(fontWeightJson, null, 2) });
  
  const fontSizeJson = parseFontSize(properties['font-size'])
  console.log({ fontSizeJson: JSON.stringify(fontSizeJson, null, 2) });
  
  const lineHeightJson = parseLineHeight(properties['line-height'])
  console.log({ lineHeightJson: JSON.stringify(lineHeightJson, null, 2) });
  
  const textColorJson = parseTextColor(properties.color)

  return []
}

export { parseFont }
