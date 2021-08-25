import express from 'express'
import AdmZip from 'adm-zip'
import path from 'path'

type Params = { folder?: string }
const PORT = 3000

const app = express()

app.use(express.static(path.join(__dirname, '../../client')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client', 'index.html'))
})

app.get('/download', (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
