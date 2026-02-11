function Hero() {
  return (
    <div className="container-fluid my-5 px-5">

      <div className="row bg-dark text-white rounded-4 p-5 align-items-center">

        {/* LEFT SIDE */}
        <div className="col-md-6">
          <p className="text-warning fw-semibold">I'm lovin' it!</p>

          <h1 className="fw-bold mb-3">
            McDonald's East London
          </h1>

          <div className="d-flex gap-3 mb-3">
            <span className="border rounded-pill px-3 py-1 small">
              Minimum Order: 12 GBP
            </span>

            <span className="border rounded-pill px-3 py-1 small">
              Delivery in 20–25 Minutes
            </span>
          </div>

          <button className="btn btn-warning rounded-pill px-4 mt-2">
            Open until 3:00 AM
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 text-center position-relative">

          <img
  src="https://images.unsplash.com/photo-1550547660-d9450f859349"
  className="img-fluid rounded-3 w-75"
  alt="burger"
/>


          {/* Rating Box */}
          <div className="bg-white text-dark rounded p-2 position-absolute bottom-0 end-0 shadow">
            <h4 className="mb-0">3.4 ⭐</h4>
            <small>1,360 reviews</small>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;
