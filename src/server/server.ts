import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import fs from 'fs'
import { fetchCode } from '../index'

const server: FastifyInstance = Fastify({ logger: true })

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async (request, reply) => {
  return { pong: 'it worked!' }
})

server.get('/download', opts, async (request, reply) => {
  const fetched = await fetchCode('https://www.youtube.com/watch?v=e69LVEnEAug')
  return fetched
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
