function OfferRow() {
  const offers = [
    { title: "First Order Discount", img: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83" },
    { title: "Vegan Discount", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
    { title: "Free Ice Cream Offer", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" }
  ];

  return (
    <div className="container-fluid px-5 my-4">
      <div className="row g-3">
        {offers.map((offer, i) => (
          <div key={i} className="col-md-4">
            <div className="card border-0 shadow-sm">
              <img src={offer.img} className="card-img-top rounded" />
              <div className="card-body fw-bold">{offer.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferRow;
