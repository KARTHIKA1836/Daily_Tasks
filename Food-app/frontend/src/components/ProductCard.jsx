function ProductCard({ img, name, price }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={img} className="burger-img" />

      <div className="card-body">
        <h6 className="fw-bold">{name}</h6>
        <p className="text-muted small">Classic meal combo</p>
        <b>Rs.{price}</b>
      </div>

      <button className="btn btn-warning rounded-circle position-absolute bottom-0 end-0 m-3">
        +
      </button>
    </div>
  );
}

export default ProductCard;
