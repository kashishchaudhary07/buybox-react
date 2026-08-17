import "./Deals.css";

function Deals() {
  const deals = [
    {
      brand: "Nike",
      name: "Nike Running Shoes",
      price: 2999,
      discount: "50% OFF",
      icon: "👟",
    },
    {
      brand: "Adidas",
      name: "Adidas Sports Shoes",
      price: 3499,
      discount: "40% OFF",
      icon: "👟",
    },
    {
      brand: "Puma",
      name: "Puma Running Shoes",
      price: 2799,
      discount: "45% OFF",
      icon: "👟",
    },
    {
      brand: "Reebok",
      name: "Reebok Training Shoes",
      price: 3199,
      discount: "35% OFF",
      icon: "👟",
    },
  ];

  return (
    <section className="deals-section">
      <div className="deals-heading">
        <div>
          <span className="deal-label">🔥 LIMITED TIME</span>
          <h2>Today's Deals</h2>
          <p>Grab your favourite shoes before the deals end!</p>
        </div>

        <div className="deal-timer">
          ⏰ Deals Today
        </div>
      </div>

      <div className="deals-container">
        {deals.map((deal, index) => (
          <div className="deal-card" key={index}>
            <div className="discount-badge">
              {deal.discount}
            </div>

            <div className="deal-image">
              {deal.icon}
            </div>

            <span className="deal-brand">
              {deal.brand}
            </span>

            <h3>{deal.name}</h3>

            <div className="deal-rating">
              ⭐ 4.{5 + (index % 4)}
            </div>

            <div className="deal-price">
              ₹{deal.price}
            </div>

            <button className="deal-button">
              🛒 Grab Deal
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Deals;
