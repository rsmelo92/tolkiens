export interface Value {
  value: string;
  count: number;
} 

interface Mapping {
  [key: string]: string
}

const cleanString = (str: string) => str.replace(/['"]+/g, '')
const getUniqueArray = (array: Array<string>) => Array.from(new Set(array))
const countOccurrences = (arr: Array<string>, val: string) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const filterNeutralKeyWords = (str: string) => !/inherit|initial|unset|\(|revert|icons/gi.test(str) 

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
  array.map(({ value }: Value) => ({ [WEIGHT_MAPPING[value]]: { value } }))
  .filter(Boolean)
  .reduce((obj, item) => ({ ...obj, ...item }), {})

function formatArray(array: Array<string>) {
  const cleanedArray = array.map(cleanString)
  const filteredArray = cleanedArray.filter(filterNeutralKeyWords)
  const cleanedArrayUnique = getUniqueArray(filteredArray)
  const cleanedArrayUniqueCount = cleanedArrayUnique.map(value => {
    const count = countOccurrences(cleanedArray, value)
    return { value, count }
  })

  return cleanedArrayUniqueCount
}

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

function parseFontWeight(array: Array<string>) {
  const fontWeight = formatArray(array)
    .map(normalizeWeight)
    .filter(removeNonNumberWeight)
    .sort((a, b) => {
      if(a.value < b.value) { return -1; }
      if(a.value > b.value) { return 1; }
      return 0;
    })
    return {
      "font": {
        "weight": {
          ...unveilFontWeight(fontWeight),
        }
      }
    }
}

export { 
  unveilFontWeight,
  formatArray,
  removeNonNumberWeight,
  normalizeWeight,
  parseFontFamily,
  parseFontWeight,
}
