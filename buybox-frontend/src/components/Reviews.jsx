import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Rahul",
      rating: "⭐⭐⭐⭐⭐",
      text: "Amazing shoes and very comfortable. Delivery was also fast!",
    },
    {
      name: "Priya",
      rating: "⭐⭐⭐⭐⭐",
      text: "Great quality and the price was really good.",
    },
    {
      name: "Aman",
      rating: "⭐⭐⭐⭐",
      text: "Nice collection and easy shopping experience.",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-heading">
        <span>💬 CUSTOMER FEEDBACK</span>
        <h2>What Our Customers Say</h2>
        <p>Real experiences from BuyBox customers.</p>
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-avatar">
              👤
            </div>

            <h3>{review.name}</h3>

            <div className="review-rating">
              {review.rating}
            </div>

            <p>"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;