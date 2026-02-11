export default function ProductCard({ product }) {
  return (
    <div className="product-card shadow-sm">
      <img src={product.image} />
      <h6>{product.name}</h6>
      <p>£{product.price}</p>
      <button className="btn btn-warning rounded-circle">+</button>
    </div>
  );
}
