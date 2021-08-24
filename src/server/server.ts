import Fastify, { FastifyInstance } from 'fastify'
import path from 'path'
import fs from 'fs'
import { fetchCode } from '../index'

const server: FastifyInstance = Fastify({ logger: true })

server.get('/download', (request, reply) => {
  reply.headers({
    'Content-disposition': 'attachment; filename=output.zip',
    'Content-Type': 'application/zip'
  })
  fetchCode('https://www.youtube.com/watch?v=e69LVEnEAug')
    .then(() => {
      fs.readFile(path.join(__dirname, '../output.zip'), (err, fileBuffer) => {
        reply.send(err || fileBuffer)
      })
    })
    .catch(reply.send)
})

const start = async () => {
  try {
    await server.listen(3000)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
