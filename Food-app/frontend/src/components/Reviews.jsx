function Reviews() {
  const reviews = [
    {
      name: "St Glx",
      date: "24th September, 2023",
      text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly.",
    },
    {
      name: "St Glx",
      date: "24th September, 2023",
      text: "Friendly staff and food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      name: "St Glx",
      date: "24th September, 2023",
      text: "Quick service, good atmosphere, and tasty meals overall.",
    }
  ];

  return (
    <div className="container-fluid px-5 py-5 bg-light">

      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">Customer Reviews</h4>
        <div>
          <button className="btn btn-warning rounded-circle me-2">‹</button>
          <button className="btn btn-warning rounded-circle">›</button>
        </div>
      </div>

      <div className="row g-3">
        {reviews.map((r, i) => (
          <div key={i} className="col-md-4">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h6 className="fw-bold">{r.name}</h6>
              <small className="text-muted">{r.date}</small>
              <p className="mt-2 small">{r.text}</p>
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <h2 className="fw-bold">3.4</h2>
        ⭐⭐⭐⭐☆
        <p className="small text-muted">1,360 reviews</p>
      </div>
    </div>
  );
}

export default Reviews;
