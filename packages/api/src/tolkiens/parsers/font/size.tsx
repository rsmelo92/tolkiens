import { formatArray, sortAlphabetically } from './font_utils'

function parseFontSize(array: Array<string>) {
  const fontSize = sortAlphabetically(formatArray(array))


  console.log({fontSize});
  
  return {
    "font": {
      "size": {
      }
    }
  }
}


export { parseFontSize }
