function Hero() {
    const goToProducts = () => {
    const products = document.getElementById("products");

    if (products) {
      products.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <h1>Welcome to Our ShopHub </h1>
        <p className="lead">
          Discover amazing products at unbeatable prices. Shop the latest electronics, fashion, and more!
        </p>
        <button className="btn btn-secondary" onClick={goToProducts}>
          <i className="bi bi-bag me-2"></i>
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero;