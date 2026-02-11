export default function HeroSection() {
  return (
    <div className="hero-box d-flex justify-content-between align-items-center">
      <div>
        <p className="hero-tag">I’m lovin’ it</p>
        <h1>McDonald's East London</h1>
        <p>Minimum Order £10 • Delivery 20–30 mins</p>
        <button className="btn btn-warning rounded-pill px-4">
          Open until 12:00 AM
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1550547660-d9450f859349"
        className="hero-img"
      />
    </div>
  );
}
