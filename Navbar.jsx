import { useState, useEffect, useContext } from 'react'
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cartCount, onCartClick } = useContext(CartContext)

  const [isBadgeAnimating, setIsBadgeAnimating] = useState(false)
  const [prevCount, setPrevCount] = useState(cartCount)

  useEffect(() => {
    if (cartCount !== prevCount) {
      setIsBadgeAnimating(true)

      setTimeout(() => setIsBadgeAnimating(false), 600)

      setPrevCount(cartCount)
    }
  }, [cartCount, prevCount])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">

      <div className="container-fluid">

        {/* Logo/Brand */}
        <a className="navbar-brand" href="#home">
          <i className="bi bi-shop me-2"></i>
          ShopHub
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            {/* Home Link */}
            <li className="nav-item">
              <a className="nav-link" href="#home">
                <i className="bi bi-house me-1"></i>
                Home
              </a>
            </li>

            {/* Products Link */}
            <li className="nav-item">
              <a className="nav-link" href="#products">
                <i className="bi bi-bag me-1"></i>
                Products
              </a>
            </li>

            {/* About Link */}
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="bi bi-info-circle me-1"></i>
                About Us
              </a>
            </li>

            {/* Contact Link */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="bi bi-telephone me-1"></i>
                Contact Us
              </a>
            </li>

            {/* Cart Link with Badge */}
            <li className="nav-item">

              <div
                className="nav-link cart-icon-badge"
                onClick={onCartClick}
                role="button"
                style={{ cursor: 'pointer' }}
              >

                <i className="bi bi-cart-fill"></i>

                {/* Cart Count Badge */}
                {cartCount > 0 && (
                  <span
                    className={`badge bg-danger rounded-pill ${
                      isBadgeAnimating
                        ? 'cart-badge-animate'
                        : ''
                    }`}
                  >
                    {cartCount}
                  </span>
                )}

              </div>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar;