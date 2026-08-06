import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  name,
  price,
  rating,
  setCartItems,
  wishlistItems,
  setWishlistItems,
}) {
  const [showDetails, setShowDetails] = useState(false);

  function handleCart() {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.name === name
      );

      if (existingItem) {
        return prev.map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          name,
          price,
          rating,
          quantity: 1,
        },
      ];
    });
  }

  function handleWishlist() {
    const exists = wishlistItems.find(
      (item) => item.name === name
    );

    if (exists) {
      alert("Already Added to Wishlist ❤️");
      return;
    }

    setWishlistItems([
      ...wishlistItems,
      {
        name,
        price,
        rating,
      },
    ]);

    alert("Added to Wishlist ❤️");
  }

  return (
    <div className="product-card">

      <div className="product-image">
          👟
      </div>

      <h2>{name}</h2>

      <p>⭐ {rating}</p>

      <h3>₹{price}</h3>

      <button onClick={handleCart}>
        🛒 Add to Cart
      </button>

      <br /><br />

      <button onClick={handleWishlist}>
        ❤️ Add to Wishlist
      </button>

      <br /><br />

      <Link to={`/product/${id}`}>
        <button>
          View Product
        </button>
      </Link>

      <br /><br />

      <button
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Quick Details"}
      </button>

      {showDetails && (
        <div className="details-box">
          <hr />

          <p>
            <b>Brand:</b> {name.split(" ")[0]}
          </p>

          <p>
            <b>Price:</b> ₹{price}
          </p>

          <p>
            <b>Rating:</b> ⭐ {rating}
          </p>

          <p>
            <b>Delivery:</b> Free Delivery
          </p>

          <p>
            <b>Return:</b> 7 Days Return
          </p>
        </div>
      )}

    </div>
  );
}

export default ProductCard;