import { blogPosts } from './data/blogPosts'

export const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Vektas | Make Complex Work Easier, Faster & More Reliable',
    description:
      'Vektas helps mid-market and enterprise organizations remove process bottlenecks, connect disconnected operations, reduce repetitive work, and deliver dependable business improvements.',
  },
  '/services': {
    title: 'How We Help | Vektas',
    description:
      'Improve slow, costly, fragmented operations without beginning with a technology project. Start with the business problem and the result your organization needs.',
  },
  '/solutions': {
    title: 'Business Problems We Solve | Vektas',
    description:
      'Vektas helps solve slow processes, broken handoffs, scattered knowledge, repetitive work, disconnected systems, fragile internal tools, and stalled improvement initiatives.',
  },
  '/pricing': {
    title: 'How We Work | Vektas',
    description:
      'Start with a focused problem assessment, prove the improvement, and invest further when measurable evidence supports it.',
  },
  '/blog': {
    title: 'Business Operations Insights | Vektas',
    description:
      'Practical guidance for reducing delays, controlling costs, improving knowledge access, preserving oversight, and delivering dependable operational change.',
  },
  '/about': {
    title: 'About Vektas | Practical Operational Improvement',
    description:
      'Vektas helps leadership and operational teams turn complicated business problems into practical plans and dependable results.',
  },
  '/contact': {
    title: 'Start a Conversation | Vektas',
    description:
      'Tell Vektas what is taking too long, costing too much, relying on workarounds, or preventing an important initiative from moving forward.',
  },
}


export const origin = 'https://vektas.com'
export const routes = [...Object.keys(routeMeta), ...blogPosts.map(post => '/blog/' + post.slug)]
export function getMetadata(path: string) {
  const normalized = path.replace(/\/+$/, '') || '/'
  const post = blogPosts.find(candidate => '/blog/' + candidate.slug === normalized)
  const meta = post ? { title: post.title + ' | Vektas', description: post.description } : (routeMeta[normalized] ?? routeMeta['/'])
  const canonical = origin + (routes.includes(normalized) ? normalized : '/')
  const organization = { '@type': 'Organization', '@id': origin + '/#organization', name: 'Vektas', url: origin, email: 'sales@vektas.com', description: routeMeta['/'].description }
  const page = { '@type': 'WebPage', '@id': canonical + '#webpage', url: canonical, name: meta.title, description: meta.description, isPartOf: { '@id': origin + '/#website' } }
  const graph: object[] = [organization, { '@type': 'WebSite', '@id': origin + '/#website', url: origin, name: 'Vektas', publisher: { '@id': organization['@id'] } }, page]
  if (post) graph.push({ '@type': 'Article', headline: post.title, description: post.description, datePublished: post.publishedAt, mainEntityOfPage: { '@id': page['@id'] }, publisher: { '@id': organization['@id'] }, author: { '@id': organization['@id'] } })
  if (normalized === '/services') graph.push({ '@type': 'Service', name: 'Business operational improvement', description: meta.description, provider: { '@id': organization['@id'] }, url: canonical })
  return { ...meta, canonical, schema: { '@context': 'https://schema.org', '@graph': graph } }
}
