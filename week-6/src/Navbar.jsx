import { useTheme } from './ThemeContext'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="navbar">
      <div className="navbar-brand">Theme demo</div>
      <button type="button" className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to dark' : 'Switch to light'}
      </button>
    </header>
  )
}
