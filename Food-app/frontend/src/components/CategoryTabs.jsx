const tabs = ["Offers", "Burgers", "Fries", "Cold Drinks", "Desserts"];

export default function CategoryTabs() {
  return (
    <div className="d-flex gap-3 my-4">
      {tabs.map(t => (
        <button
          key={t}
          className="btn btn-warning rounded-pill px-4"
        >
          {t}
        </button>
      ))}
    </div>
  );
}
