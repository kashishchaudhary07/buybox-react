
function Cart({ cartItems, setCartItems }) {

  function increaseQuantity(index) {
    const updatedCart = [...cartItems];

    updatedCart[index].quantity += 1;

    setCartItems(updatedCart);
  }

  function decreaseQuantity(index) {

    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    } else {

      const filteredCart = cartItems.filter(
        (_, i) => i !== index
      );

      setCartItems(filteredCart);
    }
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="hero">

      <h1>🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>No Products Added Yet</h3>
      ) : (
        <>
          {cartItems.map((item, index) => (

            <div className="cart-item" key={index}>

              <h2>{item.name}</h2>

              <p>₹{item.price}</p>

              <h3>
                Quantity :
                <button onClick={() => decreaseQuantity(index)}>
                  ➖
                </button>

                {item.quantity}

                <button onClick={() => increaseQuantity(index)}>
                  ➕
                </button>
              </h3>

              <h3>
                Total : ₹{item.price * item.quantity}
              </h3>

            </div>

          ))}

          <hr />

          <h2>Grand Total : ₹{total}</h2>

        </>
      )}

    </div>
  );
}

export default Cart;