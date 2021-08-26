import express from 'express'
import AdmZip from 'adm-zip'
import path from 'path'

import { fetchCode } from '../tolkiens'

type Params = { tag?: string }
const PORT = 3000

const app = express()

app.use(express.static(path.join(__dirname, '../../client')))

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '../../client', 'index.html'))
})

app.get('/download', (req, res) => {
  const { tag }: Params = req.query
  if (tag) {
    const buff = Buffer.from(tag, 'base64')
    const url = buff.toString('utf-8')
    fetchCode(url)
      .then(() => {
        const folderPath = path.join(__dirname, '../tolkiens/build')
        const zip = new AdmZip()

        zip.addLocalFolder(folderPath)

        const downloadName = `${Date.now()}.zip`
        const data = zip.toBuffer()

        res.set('Content-Type', 'application/octet-stream')
        res.set('Content-Disposition', `attachment; filename=${downloadName}`)
        res.set('Content-Length', data.length.toString())
        res.send(data)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('Error generating files')
      })
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
