import getCss from 'get-css'
import cssstats from 'cssstats'

// import { parseColor } from './parsers/color'
import { parseFont } from './parsers/font'
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
  // parseColor(properties).forEach(buildDictionary)

  parseFont(properties).forEach(buildDictionary)
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
