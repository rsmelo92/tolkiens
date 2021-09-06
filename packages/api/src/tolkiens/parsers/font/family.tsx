import { formatArray, sortByCount } from '../../utils'

function parseFontFamily(array: Array<string>) {
  const fontFamily = sortByCount(formatArray(array))
  const [main, alternative] = fontFamily.filter(f => !f.value.includes('icon'));
  return {
    "font": {
      "family": {
        "main": { value: main.value },
        ...alternative ? { "alternative": { value: alternative.value } } : {},
      }
    }
  }
}


export { parseFontFamily }
