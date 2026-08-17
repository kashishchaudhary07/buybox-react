import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>🛒 BuyBox</h2>
          <p>
            Your destination for premium shoes at
            amazing prices.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>

          <a href="/">Contact Us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Return Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <a href="/">📸 Instagram</a>
          <a href="/">💬 Facebook</a>
          <a href="/">🐦 Twitter</a>
          <a href="/">💼 LinkedIn</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 BuyBox. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;