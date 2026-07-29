import { NavLink } from 'react-router-dom'

// Day 1: functional component receiving simple string props
// Day 4: NavLink used for client-side routing/navigation
function Header({ siteName }) {
  return (
    <header className="site-header">
      <div className="logo">{siteName}</div>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          Products
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
