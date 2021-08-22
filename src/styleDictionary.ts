import styleDictionary from 'style-dictionary'
import fs from 'fs'
import path from 'path'

function buildDictionary (file: object) {
  const source = path.join(__dirname, '../../style.json')
  const stringfiedSource = JSON.stringify(file)

  fs.writeFileSync(source, stringfiedSource)

  styleDictionary.extend({
    source: [source],
    platforms: {
      scss: {
        transformGroup: 'scss',
        files: [{
          destination: 'scss/_variables.scss',
          format: 'scss/variables'
        }]
      }
    }
  })

  try {
    styleDictionary.buildAllPlatforms()
  } catch (error) {
    console.error(error)
  } finally {
    fs.unlinkSync(source)
  }
}

export { buildDictionary }
