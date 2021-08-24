import styleDictionary from 'style-dictionary'
import path from 'path'
import fs from 'fs'
// import archiver from 'archiver'

import { configs } from './config'

type File = {
  color: object;
}

interface Platforms {
  transformGroup: string;
  buildPath: string;
  files: Array<{
   destination: string;
  }>
}

function getFileNames (platforms: object) {
  const platformsArray = Object.values(platforms)

  const files = platformsArray.map(({ files }: Platforms) => {
    const names = files.map(({ destination }: { destination: string }) => destination)
    return names
  })

  console.log(files.flat())
}

// function zipFiles (sourcePath: string) {
//   const output = fs.createWriteStream(`${sourcePath}/example.zip`)
//   const archive = archiver('zip', {
//     zlib: { level: 9 }
//   })

//   archive.pipe(output)
// }

function buildDictionary (file: File) {
  const sourcePath = path.join(__dirname, 'style.json')
  const stringfied = JSON.stringify(file)
  const fileName = Object.keys(file.color)
  const platforms = configs(fileName[0])
  const platformFileNames = getFileNames(platforms)

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
