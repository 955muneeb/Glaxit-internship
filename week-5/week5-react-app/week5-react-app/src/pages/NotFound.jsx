import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found-page">
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <Link to="/">← Back home</Link>
    </section>
  )
}

export default NotFound
