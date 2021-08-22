import getCss from 'get-css'
import cssstats from 'cssstats'

import { parseColor } from './parsers/color'
import { buildDictionary } from './styleDictionary'

const URL_ADDRESS = 'https://www.youtube.com/watch?v=e69LVEnEAug'
const OP_URL = new URL(URL_ADDRESS)

function handleCss (css: string) {
  const stats = cssstats(css)
  const uniqueColors = stats.declarations.getUniquePropertyCount('color')

  if (uniqueColors > 0) {
    const baseAndNeutral = parseColor(stats.declarations.properties)
    baseAndNeutral.forEach(buildDictionary)
  }
}

function handleUrl (url: string) {
  const { href } = new URL(url, OP_URL.origin)
  return href
}

function fetchCode (url:string) {
  const formattedURL = handleUrl(url)

  getCss(formattedURL)
    .then(function ({ css }) {
      handleCss(css)
    })
    .catch(function (error) {
      console.error(error)
    })
}

fetchCode(URL_ADDRESS)

export { fetchCode }
