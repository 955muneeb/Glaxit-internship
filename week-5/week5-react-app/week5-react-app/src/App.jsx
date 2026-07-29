import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      {/* Day 1: Header receives a string prop */}
      <Header siteName="Week5.dev" />

      <main className="page-content">
        {/* Day 4: Routes/Route define which page renders per URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          {/* Day 5: dynamic segment :id read via useParams in ProductDetail */}
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* Day 4: catch-all dynamic 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer year={new Date().getFullYear()} companyName="Week5.dev" />
    </>
  )
}

export default App
