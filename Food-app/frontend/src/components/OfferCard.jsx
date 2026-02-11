export default function OfferCard({ offer }) {
  return (
    <div className="offer-card shadow-sm">
      <img src={offer.image} />
      <h5 className="p-3">{offer.title}</h5>
    </div>
  );
}
