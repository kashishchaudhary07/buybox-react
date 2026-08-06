import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="hero">
        <h2>❌ Product Not Found</h2>

        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="hero">

      <h1>{product.name}</h1>

      <div className="product-image">
        📦 Product Image
      </div>

      <h2>₹{product.price}</h2>

      <h3>⭐ {product.rating}</h3>

      <p>
        Premium quality sports shoes made with lightweight
        material for maximum comfort and durability.
      </p>

      <br />

      <ul
        style={{
          textAlign: "left",
          display: "inline-block",
        }}
      >
        <li>✅ Free Delivery</li>
        <li>✅ 7 Days Return</li>
        <li>✅ Cash on Delivery</li>
        <li>✅ 1 Year Warranty</li>
      </ul>

      <br />
      <br />

      <button
        onClick={() => navigate("/checkout")}
      >
        🛍 Buy Now
      </button>

      <br />
      <br />

      <Link to="/">
        <button>
          ⬅ Back to Home
        </button>
      </Link>

    </div>
  );
}

export default ProductDetails;