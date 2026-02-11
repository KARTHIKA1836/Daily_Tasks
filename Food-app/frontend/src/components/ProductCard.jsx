export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} />
      <h4>{product.name}</h4>
      <p>£{product.price}</p>
      <button>+</button>
    </div>
  );
}
