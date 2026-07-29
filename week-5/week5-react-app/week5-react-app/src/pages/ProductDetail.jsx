import { Link, useParams } from 'react-router-dom'
import products from '../data/products'

// Day 5: useParams reads the dynamic :id segment from the URL
function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <section className="product-detail">
        <h1>Product not found</h1>
        <p>We couldn't find a product with id "{id}".</p>
        <Link to="/products">← Back to Products</Link>
      </section>
    )
  }

  return (
    <section className="product-detail">
      <Link to="/products">← Back to Products</Link>
      <h1>{product.name}</h1>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>
    </section>
  )
}

export default ProductDetail
