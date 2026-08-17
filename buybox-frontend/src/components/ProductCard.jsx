import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({
  id,
  name,
  price,
  rating,
  image,
  setCartItems,
  wishlistItems,
  setWishlistItems,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const { addToCart } = useCart();

  function handleCart() {
    addToCart({
      id,
      name,
      price,
      rating,
      image,
    });
  }

  function handleWishlist() {
    const alreadyAdded = wishlistItems.some(
      (item) => item.id === id
    );

    if (alreadyAdded) {
      setWishlistItems(
        wishlistItems.filter((item) => item.id !== id)
      );
    } else {
      setWishlistItems([
        ...wishlistItems,
        {
          id,
          name,
          price,
          rating,
          image,
        },
      ]);
    }
  }

  const isWishlisted = wishlistItems.some(
    (item) => item.id === id
  );

  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={image}
          alt={name}
        />
      </div>

      <h2>{name}</h2>

      <p>⭐ {rating}</p>

      <h3>₹{price}</h3>

      <button onClick={handleCart}>
        🛒 Add to Cart
      </button>

      <button
        onClick={handleWishlist}
        style={{ marginTop: "10px" }}
      >
        {isWishlisted
          ? "❤️ Remove Wishlist"
          : "🤍 Add to Wishlist"}
      </button>

      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{ marginTop: "10px" }}
      >
        {showDetails
          ? "Hide Details"
          : "View Details"}
      </button>

      {showDetails && (
        <div className="details-box">
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