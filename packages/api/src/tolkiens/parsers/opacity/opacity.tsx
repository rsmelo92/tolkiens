import type { Value } from '../utils'
import { formatArray, sortAlphabetically, removeUnits } from '../utils'

const ABSOLUTE_REGEX = /^[0|1]$/
const removeAbsoluteNumbers = ({ value }: Value) => !ABSOLUTE_REGEX.test(value)

const unveilOpacity = ({ value }: Value) => {

}

function parseOpacity (properties: Properties) {
  const opacity = sortAlphabetically(formatArray(properties.opacity))
  const cleanedOpacity = opacity.filter(removeAbsoluteNumbers)
  const noUnit = cleanedOpacity.filter(({ value }) => removeUnits(value))

  console.log({noUnit});
  

  const opacityJson = {
    "opacity": {
      "level": {}
    }
  }
  return []
}

export { parseOpacity }
