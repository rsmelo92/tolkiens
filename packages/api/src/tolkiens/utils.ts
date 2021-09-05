export interface Value {
  value: string;
  count: number;
} 

const NEUTRAL_REGEX = /inherit|initial|none|unset|\(|revert|icons|transparent|smaller|larger|currentColor/

const sortAlphabetically =  (array: Array<Value>) => array.sort((a, b) => {
  if(a.value < b.value) { return -1; }
  if(a.value > b.value) { return 1; }
  return 0;
})

const sortByCount = (array: Array<Value>) => array.sort((a, b) => b.count - a.count)

const cleanString = (str: string) => str.replace(/['"]+/g, '')
const getUniqueArray = (array: Array<string>) => Array.from(new Set(array))
const countOccurrences = (arr: Array<string>, val: string) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const filterNeutralKeyWords = (str: string) => !NEUTRAL_REGEX.test(str) 

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

const replaceCSSVariablesWithValue = (css: string) => {
  const variablesValues = css.match(/--(.*?):(.*?);/g);
  const variablesUses = css.match(/var\((.*?)\)/g);

  if(variablesUses && variablesValues && variablesValues.length > 0 && variablesUses.length > 0) {
    variablesUses?.forEach(v => {
      const matcher = v.replace('var(', '').replace(')', '');
      const value = variablesValues?.find(f => f.includes(matcher));
      if ( value ){
        const [_, styleValue] = value.split(':');
        css = css.replace(v, styleValue);
      }
    })
  }

  return css;
}

export {
  formatArray,
  sortByCount,
  sortAlphabetically,
  filterNeutralKeyWords,
  replaceCSSVariablesWithValue,
}
