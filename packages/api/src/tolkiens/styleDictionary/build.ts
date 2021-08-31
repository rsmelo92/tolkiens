import styleDictionary from 'style-dictionary'
import path from 'path'
import fs from 'fs'

import { configs } from './config'

type File = {
  font: object;
}

const unveilFileName = (file: File) => {
  console.log({file});
  
  const nested = Object.values(file)[0]
  console.log({nested});
  console.log(Object.keys(nested)[0]);
  
  return Object.keys(nested)[0]
}

function buildDictionary (file: File) {
  const sourcePath = path.join(__dirname, '../style.json')
  const stringfied = JSON.stringify(file)
  const fileName = unveilFileName(file)
  const platforms = configs(fileName)

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
