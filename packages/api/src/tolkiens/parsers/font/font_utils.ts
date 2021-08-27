export interface Value {
  value: string;
  count: number;
} 

const cleanString = (str: string) => str.replace(/['"]+/g, '')
const getUniqueArray = (array: Array<string>) => Array.from(new Set(array))
const countOccurrences = (arr: Array<string>, val: string) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const filterNeutralKeyWords = (str: string) => !/inherit|initial|unset|\(|revert|icons/gi.test(str) 

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


export { formatArray }
