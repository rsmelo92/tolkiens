import cssstats from 'cssstats'
import extractCss from 'extract-css-core';

import { parseColor } from './parsers/color/color'
import { parseFont } from './parsers/font/font'
import { buildDictionary } from './styleDictionary/build'
import { replaceCSSVariablesWithValue } from './utils'


type ParseProperties = {
  css: string,
}

function parseProperties ({ css }: ParseProperties) {
  const { declarations: { properties}  } = cssstats(css)

  // Colors
  const colorTokens = parseColor(properties)

  // Fonts
  const fontTokens = parseFont(properties)

  return [...colorTokens, ...fontTokens]
}

async function fetchCode (url: string) {
  try {
    const extractedCSS = await extractCss(url);
    const css = replaceCSSVariablesWithValue(extractedCSS);

    return parseProperties({ css })
  } catch (error) {
    console.error('fetchCode', error)
    return error
  }
}

function buildVariationsAndDownload(data: Array<object>) {
  // TODO: Return buffer of the files, dont generate then
  data.forEach(buildDictionary)
}

export { fetchCode, buildVariationsAndDownload }
