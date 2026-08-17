import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({
  id,
  name,
  price,
  rating,
  image,
  wishlistItems,
  setWishlistItems,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const { addToCart } = useCart();

  const isWishlisted = wishlistItems.some(
    (item) => item.id === id
  );

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
    if (isWishlisted) {
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

  return (
    <div className="product-card">

      <div className="product-image-wrapper">

        <span className="discount-badge">
          SALE
        </span>

        <button
          className={`wishlist-button ${
            isWishlisted ? "active" : ""
          }`}
          onClick={handleWishlist}
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>

        <img
          src={image}
          alt={name}
          className="product-card-image"
        />

      </div>

      <div className="product-card-content">

        <p className="product-brand">
          {name.split(" ")[0]}
        </p>

        <h2>{name}</h2>

        <div className="rating">
          ⭐ {rating}
        </div>

        <h3 className="product-price">
          ₹{price}
        </h3>

        <div className="product-info">
          🚚 Free Delivery
        </div>

        <div className="product-info">
          🔄 7 Days Return
        </div>

        <button
          className="cart-button"
          onClick={handleCart}
        >
          🛒 Add to Cart
        </button>

        <button
          className="details-button"
          onClick={() =>
            setShowDetails(!showDetails)
          }
        >
          {showDetails
            ? "Hide Details"
            : "View Details"}
        </button>

        {showDetails && (
          <div className="details-box">

            <p>
              <b>Brand:</b>{" "}
              {name.split(" ")[0]}
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

    </div>
  );
}

export default ProductCard;