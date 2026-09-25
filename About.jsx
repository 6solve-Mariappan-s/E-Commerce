function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2>About Us</h2>
          <p className="text-muted">
            Your trusted online shopping destination
          </p>
        </div>

        <div className="row align-items-center g-4">

          {/* Image */}
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
              alt="Online Shopping"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Content */}
          <div className="col-lg-6">

            <h3>Everything You Need, In One Place</h3>

            <p className="text-muted">
              ShopHub is an e-commerce website where you can discover
              quality products at affordable prices.
            </p>

            <p className="text-muted">
              We make online shopping simple, convenient, and secure.
              Browse products, add them to your cart, and shop with ease.
            </p>

            {/* Features */}
            <div className="row mt-4">

              <div className="col-sm-6 mb-4">
                <i className="bi bi-truck fs-2"></i>
                <h5>Fast Delivery</h5>
                <p className="text-muted">
                  Get your products delivered quickly.
                </p>
              </div>

              <div className="col-sm-6 mb-4">
                <i className="bi bi-shield-check fs-2"></i>
                <h5>Secure Shopping</h5>
                <p className="text-muted">
                  Your shopping experience is safe and secure.
                </p>
              </div>

              <div className="col-sm-6 mb-4">
                <i className="bi bi-tags fs-2"></i>
                <h5>Best Deals</h5>
                <p className="text-muted">
                  Find quality products at great prices.
                </p>
              </div>

              <div className="col-sm-6 mb-4">
                <i className="bi bi-headset fs-2"></i>
                <h5>Customer Support</h5>
                <p className="text-muted">
                  We are here to help whenever you need us.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;