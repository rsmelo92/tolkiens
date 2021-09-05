import { hasNeutralDistance, getScalePallete, getSecondaryColor } from './color_utils'
import type { Value } from '../../utils'

function parseThemeColors(colors: Array<Value>) {
  const nonNeutral = colors.filter(({ value }) => hasNeutralDistance(value))
  const primaryColor = nonNeutral[0].value
  const primary = getScalePallete(primaryColor, 'primary')

  const secondaryColor = getSecondaryColor(primary['00'].value, nonNeutral)
  const secondary = getScalePallete(secondaryColor, 'secondary')
  
  const themeJson = {
    color: {
      theme: {
        primary,
        secondary,
      }
    }
  }

  return themeJson
}

export { parseThemeColors }
