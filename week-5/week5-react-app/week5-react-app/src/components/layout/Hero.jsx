// Day 1: functional component, receives basic string data via props
function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  )
}

export default Hero
