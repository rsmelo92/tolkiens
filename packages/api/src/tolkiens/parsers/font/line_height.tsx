import { formatArray, sortByCount } from '../utils'
import { removeUnits } from './font_utils'

const ALTERNATIVES = ['1.4', '1.5', '1.6']

const normalizeHeight = (value: number) => value.toFixed(2).toString()

const unveilLineHeight = (heightArray?: Array<string>) => {
  if (heightArray && heightArray.length > 0) {
    const [height] = heightArray;

    if (height) {
      const sm = parseFloat(height) - 0.2
      const lg = parseFloat(height) + 0.2
  
      return {
        "small": { "value": normalizeHeight(sm) },
        "medium": { "value": height },
        "large": { "value": normalizeHeight(lg) },
        "reset": { "value": "initial" },
      }
    }
  }

  // Default
  return {
    "small": { "value": "1.25" },
    "medium": { "value": "1.5" },
    "large": { "value": "1.8" },
    "reset": { "value": "initial" },
  }
}

function parseLineHeight(array: Array<string>) {
  const lineHeight = sortByCount(formatArray(array))
  const noUnit = lineHeight.filter(({ value }) => removeUnits(value))
  const noPercent = noUnit.filter(({ value }) => !value.includes('%'))

  const lineHeightBase = noPercent.map(({ value }) => {
    const firstLineHeight = ALTERNATIVES.some(a => a === value)
    if (firstLineHeight) {
      return value;
    }
    return ''
  }).filter(Boolean)
  
  return {
    'font': {
      'line-height': unveilLineHeight(lineHeightBase)
    }
  }
}


export { parseLineHeight }
