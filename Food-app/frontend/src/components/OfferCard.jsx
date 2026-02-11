export default function OfferCard({ offer }) {
  return (
    <div className="offer-card">
      <img src={offer.image} />
      <h4>{offer.title}</h4>
    </div>
  );
}
