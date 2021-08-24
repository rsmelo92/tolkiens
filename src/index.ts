import getCss from 'get-css'
import cssstats from 'cssstats'
import fs from 'fs'
import path from 'path'
import archiver from 'archiver'
import rimraf from 'rimraf'

import { parseColor } from './parsers/color'
import { buildDictionary } from './styleDictionary/build'

type ParseProperties = {
  css: string,
}

function zipFolder () {
  const outputDir = path.join(__dirname, '/output.zip')
  const buildDir = path.join(__dirname, 'build')
  const output = fs.createWriteStream(outputDir)
  const archive = archiver('zip', {
    zlib: { level: 9 }
  })

  output.on('close', () => {
    rimraf.sync(buildDir)
  })

  archive.pipe(output)
  archive.directory('build/', false)
  archive.glob('*', { cwd: path.join(__dirname, 'build') })
  archive.finalize()
}

function parseProperties ({ css }: ParseProperties) {
  const { declarations: { properties } } = cssstats(css)

  // Colors
  parseColor(properties).forEach(buildDictionary)

  // Zip all generated files
  zipFolder()
}

async function fetchCode (url: string) {
  try {
    const properties = await getCss(url)
    parseProperties(properties)
  } catch (error) {
    console.error(error)
  }
}

fetchCode('https://github.com/')

export { fetchCode }
