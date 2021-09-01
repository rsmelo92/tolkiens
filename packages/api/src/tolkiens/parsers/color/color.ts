import { normalizeColorsToHex } from './color_utils'
import { formatArray, sortByCount } from '../../utils'
import { parseThemeColors } from './theme'

function parseColor (properties: Properties) {
  const normalizedColors = normalizeColorsToHex(properties)
  const colors = sortByCount(formatArray(normalizedColors))
  const themeJson = parseThemeColors(colors)
  
  return [themeJson]
}

export { parseColor }
