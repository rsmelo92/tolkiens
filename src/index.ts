import getCss from 'get-css'
import cssstats from 'cssstats'

import { parseColor } from './parsers/color'
import { buildDictionary } from './styleDictionary/build'

type ParseProperties = {
  css: string,
}

const URL_ADDRESS = 'https://www.youtube.com/watch?v=e69LVEnEAug'
const OP_URL = new URL(URL_ADDRESS)

function parseProperties ({ css }: ParseProperties) {
  const { declarations: { properties } } = cssstats(css)

  // Colors
  parseColor(properties).forEach(buildDictionary)
}

function fetchCode (url: string) {
  const { href } = new URL(url, OP_URL.origin)
  getCss(href)
    .then(parseProperties)
    .catch(console.error)
}

fetchCode(URL_ADDRESS)
