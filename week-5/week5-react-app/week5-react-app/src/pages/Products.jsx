import { Link } from 'react-router-dom'
import products from '../data/products'

// Day 5: clicking an item routes to /products/:id
function Products() {
  return (
    <section className="products-page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Link className="product-card" to={`/products/${product.id}`} key={product.id}>
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Products
