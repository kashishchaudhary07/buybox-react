import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="hero">
      <h1>🎉 Order Placed Successfully!</h1>

      <h2>Thank you for shopping with BuyBox ❤️</h2>

      <p>Your order will be delivered soon.</p>

      <br />

      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Success;