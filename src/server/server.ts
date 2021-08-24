import express from 'express'
import path from 'path'

import { fetchCode } from '../index'

const app = express()
const port = 3000

app.get('/download', (req, res) => {
  fetchCode('https://www.youtube.com/watch?v=e69LVEnEAug')
    .then(() => {
      res.sendFile(path.join(__dirname, '../output.zip'))
    })
    .catch(console.error)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
