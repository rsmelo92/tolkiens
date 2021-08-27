import { formatArray } from './font_utils'

function parseFontFamily(array: Array<string>) {
  const fontFamily = formatArray(array).sort((a, b) => b.count - a.count)
  return {
    "font": {
      "family": {
        "default": { value: fontFamily[0].value },
        ...fontFamily[1] ? { "alternative": { value: fontFamily[1].value } } : {},
      }
    }
  }
}


export { parseFontFamily }
