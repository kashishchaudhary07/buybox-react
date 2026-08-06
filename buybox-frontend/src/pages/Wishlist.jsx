function Wishlist({ wishlistItems, setWishlistItems }) {
  function removeItem(index) {
    const updated = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updated);
  }

  return (
    <div className="hero">
      <h1>❤️ Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <h3>No Products in Wishlist</h3>
      ) : (
        wishlistItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <h2>{item.name}</h2>

            <p>₹{item.price}</p>

            <p>⭐ {item.rating}</p>

            <button onClick={() => removeItem(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;