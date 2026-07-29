// Day 1: functional component, receives basic string data via props
function Footer({ year, companyName }) {
  return (
    <footer className="site-footer">
      <p>© {year} {companyName}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
