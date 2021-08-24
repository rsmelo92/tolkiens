import express from 'express'
import AdmZip from 'adm-zip'
import path from 'path'

type Params = { folder?: string }

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const { folder }: Params = req.params

  if (folder) {
    const folderPath = path.join(__dirname, '../output')
    const zip = new AdmZip()

    zip.addLocalFolder(folderPath)

    const downloadName = `${Date.now()}.zip`
    const data = zip.toBuffer()
    res.set('Content-Type', 'application/octet-stream')
    res.set('Content-Disposition', `attachment; filename=${downloadName}`)
    res.set('Content-Length', data.length.toString())
    res.send(data)
  }
  res.status(404).send('Sorry, we cannot find that!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
