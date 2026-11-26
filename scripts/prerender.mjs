import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { routes, getMetadata, render } from '../.ssg/entry-server.js'
const template = await readFile('dist/index.html', 'utf8')
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
for (const route of routes) {
  const meta = getMetadata(route)
  const markup = render(route)
  if (!markup.includes('<h1')) throw new Error('Missing heading: ' + route)
  const head = [
    '<title>' + escape(meta.title) + '</title>',
    '<meta name="description" content="' + escape(meta.description) + '">',
    '<link rel="canonical" href="' + escape(meta.canonical) + '">',
    '<meta property="og:type" content="' + (route.startsWith('/blog/') ? 'article' : 'website') + '">',
    '<meta property="og:site_name" content="Vektas">',
    '<meta property="og:title" content="' + escape(meta.title) + '">',
    '<meta property="og:description" content="' + escape(meta.description) + '">',
    '<meta property="og:url" content="' + escape(meta.canonical) + '">',
    '<meta name="twitter:card" content="summary">',
    '<meta name="twitter:title" content="' + escape(meta.title) + '">',
    '<meta name="twitter:description" content="' + escape(meta.description) + '">',
    '<script type="application/ld+json" data-vektas-schema>' + JSON.stringify(meta.schema).replaceAll('<', '\\u003c') + '</script>',
  ].join('\n')
  if (!template.includes('<!-- SEO -->') || !template.includes('<div id="root"></div>')) throw new Error('Missing template markers')
  const html = template.replace('<!-- SEO -->', () => head).replace('<div id="root"></div>', () => '<div id="root">' + markup + '</div>')
  const file = join('dist', route.slice(1), 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
  console.log('Rendered ' + route)
}
await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(route => '  <url><loc>' + escape(getMetadata(route).canonical) + '</loc></url>').join('\n') + '\n</urlset>\n')
await rm('.ssg', { recursive: true, force: true })
