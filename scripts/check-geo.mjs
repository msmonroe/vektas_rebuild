import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
assert.ok(urls.length >= 13, 'Expected all existing public routes')
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap entries')
for (const url of urls) {
  const path = new URL(url)
  assert.equal(path.origin, 'https://vektas.com')
  const html = await readFile(join('dist', path.pathname.slice(1), 'index.html'), 'utf8')
  assert.ok(html.includes('<h1'), 'Missing static heading: ' + url)
  assert.ok(html.includes('<link rel="canonical" href="' + url + '">'), 'Missing canonical: ' + url)
  assert.ok(/<title>[^<]+<\/title>/.test(html), 'Missing title: ' + url)
  assert.ok(/<meta name="description" content="[^"]+">/.test(html), 'Missing description: ' + url)
  const schema = html.match(/<script type="application\/ld\+json" data-vektas-schema>([\s\S]*?)<\/script>/)
  assert.ok(schema, 'Missing structured data: ' + url)
  const graph = JSON.parse(schema[1])['@graph']
  assert.ok(graph.some(item => item['@type'] === 'Organization'))
  if (path.pathname.startsWith('/blog/')) assert.ok(graph.some(item => item['@type'] === 'Article'))
  console.log('PASS ' + url)
}
assert.ok((await readFile('dist/robots.txt','utf8')).includes('Sitemap: https://vektas.com/sitemap.xml'))
console.log('Validated ' + urls.length + ' static pages')
