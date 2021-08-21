import { get } from 'https'
import { handleHtml } from './handlers'

const URL_ADDRESS = 'https://www.youtube.com/watch?v=e69LVEnEAug'
const OP_URL = new URL(URL_ADDRESS)

function handleUrl (url: string) {
  const { href } = new URL(url, OP_URL.origin)
  return href
}

function fetchCode (url:string, callback: (param:string) => void) {
  const formattedURL = handleUrl(url)

  get(formattedURL, (res) => {
    const body: Array<Uint8Array> = []

    res.on('data', (chunk) => {
      body.push(chunk)
    })

    res.on('end', () => {
      const content = Buffer.concat(body).toString()
      callback(content)
    })
  })
}

function fetchCss (url: string) {
  fetchCode(url, (html:string) => {
    handleHtml(html)
  })
}

fetchCss(URL_ADDRESS)

export { fetchCode }
