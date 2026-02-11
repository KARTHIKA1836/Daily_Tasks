const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/4/4b/McDonald%27s_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Papa_John%27s_Logo_2019.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Burger_King_logo.svg"
];

export default function RestaurantSlider() {
  return (
    <div className="restaurant-slider">
      {brands.map((b, i) => (
        <div key={i} className="brand-card">
          <img src={b} />
        </div>
      ))}
    </div>
  );
}
