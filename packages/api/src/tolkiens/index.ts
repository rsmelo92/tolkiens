import getCss from 'get-css'
import cssstats from 'cssstats'

import { parseColor } from './parsers/color/color'
import { parseFont } from './parsers/font/font'
import { buildDictionary } from './styleDictionary/build'

type ParseProperties = {
  css: string,
}

function parseProperties ({ css }: ParseProperties) {
  const {
    declarations: {
      properties
    }
  } = cssstats(css)

  // Colors
  const colorTokens = parseColor(properties)

  // Fonts
  const fontTokens = parseFont(properties)
  return [...colorTokens, ...fontTokens]
}

async function fetchCode (url: string) {
  try {
    const properties = await getCss(url)
    return parseProperties(properties)
  } catch (error) {
    console.error('fetchCode', error)
    return error
  }
}

export { fetchCode }
