import express from 'express'
import AdmZip from 'adm-zip'
import rimraf from 'rimraf'
import path from 'path'

import { fetchCode, buildVariationsAndDownload } from '../tolkiens'

type Params = { 
  tag?: string;
  tokens?: string;
}

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, '../../client')))

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '../../client', 'index.html'))
})

app.get('/tokens', (req, res) => {
  const { tag }: Params = req.query
  if (tag) {
    const buff = Buffer.from(tag, 'base64')
    const url = buff.toString('utf-8')

    fetchCode(url)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send(err)
      })
  }
})

app.get('/download', (req, res) => {
  const { tokens }: Params = req.query;
  if (tokens) {
    const buff = Buffer.from(tokens, 'base64')
    const decodedTokens = buff.toString('utf-8')
    const parsedTokens = JSON.parse(decodedTokens)
    
    buildVariationsAndDownload(parsedTokens)

    const folderPath = path.join(__dirname, '../tolkiens/build')
    const zip = new AdmZip()

    zip.addLocalFolder(folderPath)
    rimraf.sync(folderPath)

    const downloadName = `${Date.now()}.zip`
    const data = zip.toBuffer()

    res.set('Content-Type', 'application/octet-stream')
    res.set('Content-Disposition', `attachment; filename=${downloadName}`)
    res.set('Content-Length', data.length.toString())
    res.send(data)
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
