import chroma from "chroma-js";
import { filterNeutralKeyWords } from '../../utils'

import type { Value } from '../../utils'

const NEUTRAL_MIN_DISTANCE = 300
const PRIMARY_MIN_DISTANCE = 200

const hasNeutralDistance = (color: string) => {
  const whiteDistance = Math.floor(chroma.distance('#ffffff', color));
  const whiteDelta = Math.floor(chroma.deltaE('#ffffff', color));
  const blackDistance = Math.floor(chroma.distance('#000000', color));
  const blackDelta = Math.floor(chroma.deltaE('#000000', color));
  const total = blackDistance + blackDelta + whiteDistance + whiteDelta

  return total >= NEUTRAL_MIN_DISTANCE
}

function getScalePallete(color: string, key: string = 'primary') {
  const palleteLight = chroma.scale([color, 'ffffff']).colors(4)
  const palleteDark = chroma.scale([color, '000000']).colors(4)
  return {
    '00': { value: color },
    '01': { value: palleteLight[1] },
    '02': { value: palleteLight[2] },
    '03': { value: palleteDark[1] },
    '04': { value: palleteDark[2] },
  }
}

function getSecondaryColor(primary: string, colors: Array<Value>) {
  const secondary = colors.find(({ value }) => {
    const primaryDistance = Math.floor(chroma.distance(primary, value));
    const primaryDelta = Math.floor(chroma.deltaE(primary, value));
    return primaryDelta + primaryDistance >= PRIMARY_MIN_DISTANCE;
  })

  if (!secondary) {
    // TODO: Generate complementary color from primary color
    return chroma(primary).saturate(3).hex()
  }

  return secondary.value
}

function getAllColors (properties: Properties) {
  return [
    ...properties.background || [],
    ...properties.fill || [],
    ...properties['background-color'] || [],
  ]
}

function normalizeColorsToHex(properties: Properties) {
  const allColors = getAllColors(properties)
  const filtered = allColors.filter(filterNeutralKeyWords)
  const allHex = filtered.map(c => {
    if (chroma.valid(c)) {
      return chroma(c).hex()
    }
    return '#fff'
  })

  return allHex
}

export {
  getAllColors,
  normalizeColorsToHex,
  hasNeutralDistance,
  getSecondaryColor,
  getScalePallete,
}
