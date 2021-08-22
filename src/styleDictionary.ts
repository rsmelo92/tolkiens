import styleDictionary from 'style-dictionary'
import fs from 'fs'
import path from 'path'

function buildDictionary (file: object) {
  const sourcePath = path.join(__dirname, 'style.json')
  const stringfied = JSON.stringify(file)

  fs.writeFileSync(sourcePath, stringfied)

  styleDictionary.extend({
    source: [sourcePath],
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
    fs.unlinkSync(sourcePath)
  }
}

export { buildDictionary }
