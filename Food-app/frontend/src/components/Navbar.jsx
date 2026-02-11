export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-5">
      <span className="navbar-brand fw-bold fs-4">
        Order 🍔
      </span>

      <div className="mx-auto d-flex gap-4 fw-medium">
        <span>Home</span>
        <span>Special Offers</span>
        <span>Restaurants</span>
        <span>Track Order</span>
      </div>

      <button className="btn btn-outline-dark rounded-pill px-4">
        Login / Signup
      </button>
    </nav>
  );
}
