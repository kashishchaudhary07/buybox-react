import "./Hero.css";

function Hero() {
  return (
    <section className="hero-banner">
      <div className="hero-left">

        <span className="sale-tag">
          🔥 Biggest Sale of 2026
        </span>

        <h1>
          Premium Shoes <br />
          Collection
        </h1>

        <p>
          Discover the latest Nike, Adidas, Puma and
          Reebok shoes with amazing discounts.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">
            🛒 Shop Now
          </button>

          <button className="explore-btn">
            Explore
          </button>
        </div>

      </div>

      <div className="hero-right">
        👟
      </div>
    </section>
  );
}

export default Hero;