import reviews from "../data/reviews";

export default function Reviews() {
  return (
    <div className="reviews">
      {reviews.map(r => (
        <div key={r.id} className="review-card">
          <h4>{r.name}</h4>
          <p>{r.text}</p>
        </div>
      ))}
    </div>
  );
}
