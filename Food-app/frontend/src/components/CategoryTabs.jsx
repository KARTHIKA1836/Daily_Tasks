function CategoryTabs() {
  const categories = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    "Cold Drinks",
    "Happy Meal",
    "Desserts",
    "Hot Drinks",
    "Sauces"
  ];

  return (
    <div className="container-fluid px-5 my-4">
      <div className="d-flex flex-wrap gap-2">

        {categories.map((item, index) => (
          <button
            key={index}
            className={`btn rounded-pill px-4 ${
              index === 0 ? "btn-warning text-dark" : "btn-outline-warning"
            }`}
          >
            {item}
          </button>
        ))}

      </div>
    </div>
  );
}

export default CategoryTabs;
