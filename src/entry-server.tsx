import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
export { routes, getMetadata } from './seo'
export function render(path: string) {
  return renderToString(<StaticRouter location={path}><App /></StaticRouter>)
}
