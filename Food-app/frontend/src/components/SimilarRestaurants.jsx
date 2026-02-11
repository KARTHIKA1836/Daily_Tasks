function SimilarRestaurants() {
  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/McDonald%27s_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/6/62/Papa_Johns_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/3/3b/Burger_King_logo.svg",
  ];

  return (
    <div className="container-fluid px-5 py-4">
      <h4 className="fw-bold mb-3">Similar Restaurants</h4>

      <div className="d-flex flex-wrap gap-3">
        {brands.map((logo, i) => (
          <div
            key={i}
            className="bg-white shadow-sm rounded p-3 d-flex align-items-center justify-content-center"
            style={{ width: "120px", height: "90px" }}
          >
            <img src={logo} style={{ maxWidth: "80px" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarRestaurants;
