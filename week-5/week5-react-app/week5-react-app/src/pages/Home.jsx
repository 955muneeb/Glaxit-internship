import Hero from '../components/layout/Hero'
import FAQAccordion from '../components/accordion/FAQAccordion'
import PostsList from '../components/posts/PostsList'

function Home() {
  return (
    <>
      {/* Day 1: Hero receives basic string props */}
      <Hero
        title="Welcome to Week 5"
        subtitle="A single React app covering components, state, effects, and routing."
      />

      {/* Day 3: fetches mock posts on mount, shows spinner/error states */}
      <PostsList />

      {/* Day 2: interactive accordion using useState */}
      <FAQAccordion />
    </>
  )
}

export default Home
