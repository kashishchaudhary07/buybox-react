import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  cartCount,
  wishlistCount,
  darkMode,
  setDarkMode,
}) {
  return (
    <nav className="navbar">
      <div className="logo">
        🛒 BuyBox
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">🏠 Home</Link>
        </li>

        <li>
          <Link to="/wishlist">
            ❤️ Wishlist ({wishlistCount})
          </Link>
        </li>

        <li>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </li>

        <li>
          <Link to="/login">
            👤 Login
          </Link>
        </li>

        <li>
          <button
            className="dark-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;