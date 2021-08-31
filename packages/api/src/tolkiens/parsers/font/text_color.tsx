import { formatArray, sortByCount } from './font_utils'

function parseTextColor(array: Array<string>) {
  const textColor = sortByCount(formatArray(array))
  
  console.log({ textColor });
  

  return {}
}


export { parseTextColor }
