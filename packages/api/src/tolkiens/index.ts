import getCss from 'get-css'
import cssstats from 'cssstats'

// import { parseColor } from './parsers/color/color'
import { parseFont } from './parsers/font/font'
import { parseOpacity } from './parsers/opacity/opacity'
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

  console.log({properties});
  

  // Colors
  // parseColor(properties).forEach(buildDictionary)

  parseFont(properties).forEach(buildDictionary)
  parseOpacity(properties).forEach(buildDictionary)
}

async function fetchCode (url: string) {
  try {
    const properties = await getCss(url)
    parseProperties(properties)
  } catch (error) {
    console.error('fetchCode', error)
  }
}

export { fetchCode }
