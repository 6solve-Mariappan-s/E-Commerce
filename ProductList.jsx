import ProductCard from './ProductCard'

function ProductList({ products }) {

  return (
    <section id="products" className="product-section">
      <div className="container">
        <h2>Featured Products</h2>

        {/* Products Grid */}
        <div className="row g-4">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-lg-3"
              >
                {/* ProductCard Component */}
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">
                No products available
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default ProductList;