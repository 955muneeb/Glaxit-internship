import { useEffect, useState } from 'react'
import Spinner from './Spinner'

// Day 3: fetches mock data immediately on mount.
// Empty dependency array [] means the effect runs once, after the first render (mount).
function PostsList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isCancelled = false // guards against setting state after unmount

    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()
        if (!isCancelled) {
          setPosts(data)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Something went wrong while fetching posts.')
        }
      } finally {
        if (!isCancelled) {
          setLoading(false)
        }
      }
    }

    fetchPosts()

    // cleanup runs on unmount
    return () => {
      isCancelled = true
    }
  }, [])

  if (loading) {
    return (
      <div className="posts-list">
        <h2>Latest Posts</h2>
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="posts-list">
        <h2>Latest Posts</h2>
        <p className="error-message">Couldn't load posts: {error}</p>
      </div>
    )
  }

  return (
    <div className="posts-list">
      <h2>Latest Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default PostsList
