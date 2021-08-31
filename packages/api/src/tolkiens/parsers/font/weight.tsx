import { formatArray, sortAlphabetically } from './font_utils'

import type { Value } from './font_utils'

interface Mapping {
  [key: string]: string
}

const normalizeWeight = ({ value, count }: Value) => ({ 
  value: value.replace(/'normal'|'bold'gi/, '400').replace(/'bold'gi/, '700'),
  count,
})
const removeNonNumberWeight = ({ value }: Value) =>  !/lighter|bolder/g.test(value)

const WEIGHT_MAPPING: Mapping = {
  '100': 'thin',
  '200': 'extra-light',
  '300': 'light',
  '400': 'normal',
  '500': 'medium',
  '600': 'semi-bold',
  '700': 'bold',
  '800': 'extra-bold',
  '900': 'ultra-bold',
}

const unveilFontWeight = (array: Array<Value>) => 
  array.map(({ value }: Value) => {
    const key = WEIGHT_MAPPING[value]
    if (key) {
      return { 
        [key]: { value } 
      }
    }
  })
  .filter(Boolean)
  .reduce((obj, item) => ({ ...obj, ...item }), {})


function parseFontWeight(array: Array<string>) {
  const fontWeight = formatArray(array)
    .map(normalizeWeight)
    .filter(removeNonNumberWeight)

  const sortedWeight = sortAlphabetically(fontWeight)

  return {
    "font": {
      "weight": {
        ...unveilFontWeight(sortedWeight),
      }
    }
  }
}

export { parseFontWeight }
