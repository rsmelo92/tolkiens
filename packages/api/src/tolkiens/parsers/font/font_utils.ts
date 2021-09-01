const UNITS_REGEX = /cm|mm|in|px|pt|pc|em|ex|rem|ch|vw|vh|vmin|vmax|%/
const removeUnits = (str: string) => !UNITS_REGEX.test(str) 

export { 
  removeUnits,
}
