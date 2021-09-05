import { formatArray, sortByCount } from '../../utils'

function parseFontFamily(array: Array<string>) {
  const fontFamily = sortByCount(formatArray(array))
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
