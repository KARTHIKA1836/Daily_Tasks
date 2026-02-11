function Navbar() {
  return (
    <>
      <div className="bg-light py-2 px-4 d-flex justify-content-between small">
        <span>
          Get 5% Off your first order, 
          <b className="text-warning ms-1">Promo: ORDER5</b>
        </span>

        <span>
          Regent Street, London • 
          <span className="text-warning ms-1">Change location</span>
        </span>
      </div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-5 py-3">
        <a className="navbar-brand fw-bold fs-3">
          Order<span className="text-warning">UK</span>
        </a>

        <div className="ms-auto d-flex align-items-center gap-4">
          <span className="fw-medium">Home</span>
          <span className="fw-medium">Special Offers</span>

          <button className="btn btn-warning rounded-pill px-4">
            Restaurants
          </button>

          <span className="fw-medium">Track Order</span>

          <button className="btn btn-dark rounded-pill px-4">
            Login / Signup
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
