import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");

  function placeOrder() {
    if (name === "" || phone === "" || address === "") {
      alert("Please fill all details!");
      return;
    }

    alert("Order Placed Successfully 🎉");
    navigate("/success");
  }

  return (
    <div className="hero">
      <h1>Checkout</h1>

      <input
        type="text"
        placeholder="Enter Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br />
      <br />

      <select
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
      >
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Credit / Debit Card</option>
      </select>

      <br />
      <br />

      <button onClick={placeOrder}>
        🛍 Place Order
      </button>
    </div>
  );
}

export default Checkout;