import { Plus } from "lucide-react";
import "../App.css";

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h4>{name}</h4>
      <p>Fresh and delicious meal</p>

      <div className="price-row">
        <span>${price}</span>
        <button className="add-btn">
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
