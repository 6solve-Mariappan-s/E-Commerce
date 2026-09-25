function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container-fluid">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h5>
              <i className="bi bi-shop me-2"></i>
              About ShopHub
            </h5>
            <p>
              ShopHub is your ultimate destination for quality products and amazing deals. 
              We bring you the best selection of electronics, fashion, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <a href="#home">
                  <i className="bi bi-chevron-right"></i> Home
                </a>
              </li>
              <li>
                <a href="#products">
                  <i className="bi bi-chevron-right"></i> Products
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="bi bi-chevron-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="bi bi-chevron-right"></i> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h5>Customer Service</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <a href="#faq">
                  <i className="bi bi-chevron-right"></i> FAQ
                </a>
              </li>
              <li>
                <a href="#returns">
                  <i className="bi bi-chevron-right"></i> Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#shipping">
                  <i className="bi bi-chevron-right"></i> Shipping Info
                </a>
              </li>
              <li>
                <a href="#privacy">
                  <i className="bi bi-chevron-right"></i> Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="footer-section">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-envelope me-2"></i>
              Email: support@example.com


            </p>
            <p>
              <i className="bi bi-telephone me-2"></i>
              Phone:+91 98765 43210


            </p>
            <p>
              <i className="bi bi-geo-alt me-2"></i>
              123 Main Street, Chennai, Tamil Nadu


            </p>

            {/* Social Media Icons */}
            <h6 className="mt-3 mb-2">Follow Us</h6>
            <div className="social-icons">
              <a href="#facebook" className="social-icon" title="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#instagram" className="social-icon" title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#twitter" className="social-icon" title="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#youtube" className="social-icon" title="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#linkedin" className="social-icon" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} ShopHub. All rights reserved. 
            <br />
            Made with <i className="bi bi-heart-fill text-danger"></i> by ShopHub Team
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;