import { useState, useRef, useContext } from 'react'
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const {  onAddToCart } = useContext(CartContext)

  const [isAdding, setIsAdding] = useState(false)

  const imageRef = useRef(null)

  const handleAddToCart = () => {
    setIsAdding(true)
    onAddToCart(product)

    setTimeout(() => {
      setIsAdding(false)
    }, 600)
  }

  return (
    <div className={`card product-card ${isAdding ? 'adding-to-cart' : ''}`}>

      {/* Product Image */}
      <img
        ref={imageRef}
        src={product.image}
        alt={product.title}
        className="card-img-top"
      />

      {/* Product Details */}
      <div className="card-body product-card-body">

        {/* Category Badge */}
        {product.category && (
          <span className="badge bg-info product-category">
            {product.category}
          </span>
        )}

        {/* Product Title */}
        <h5 className="card-title product-title">
          {product.title}
        </h5>

        {/* Product Description */}
        {product.description && (
          <p
            className="card-text text-muted"
            style={{ fontSize: '0.85rem' }}
          >
            {product.description.substring(0, 60)}...
          </p>
        )}

        {/* Product Price */}
        <div className="product-price">
          ${product.price.toFixed(2)}
        </div>

        {/* Add to Cart Button */}
        <button
          className={`btn-add-to-cart ${isAdding ? 'added' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? (
            <>
              <i className="bi bi-check-circle me-2"></i>
              Added!
            </>
          ) : (
            <>
              <i className="bi bi-cart-plus me-2"></i>
              Add to Cart
            </>
          )}
        </button>

      </div>
    </div>
  )
}

export default ProductCard;