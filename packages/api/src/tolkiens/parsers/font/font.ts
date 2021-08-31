import { parseFontFamily } from './family'
import { parseFontWeight } from './weight'
import { parseFontSize } from './size'
import { parseLineHeight } from './line_height'

function parseFont (properties: Properties) {
  const fontFamilyJson = parseFontFamily(properties['font-family'])
  const fontWeightJson = parseFontWeight(properties['font-weight'])
  const fontSizeJson = parseFontSize()
  const lineHeightJson = parseLineHeight(properties['line-height'])
  return [
    fontFamilyJson,
    fontWeightJson,
    fontSizeJson,
    lineHeightJson,
  ]
}

export { parseFont }
