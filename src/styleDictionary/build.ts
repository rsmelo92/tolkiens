import styleDictionary from 'style-dictionary'
import path from 'path'
import fs from 'fs'

import { configs } from './config'

type File = {
  color: object;
}

function buildDictionary (file: File) {
  const sourcePath = path.join(__dirname, '../style.json')
  const stringfied = JSON.stringify(file)
  const fileName = Object.keys(file.color)
  const platforms = configs(fileName[0])

  fs.writeFileSync(sourcePath, stringfied)

  const styleDictionaryExtended = styleDictionary.extend({
    source: [sourcePath],
    platforms
  })

  try {
    styleDictionaryExtended.buildAllPlatforms()
  } catch (error) {
    console.error(error)
  } finally {
    fs.unlinkSync(sourcePath)
  }
}

export { buildDictionary }
