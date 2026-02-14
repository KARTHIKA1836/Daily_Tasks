import API from "../api/api";

const ProductCard = ({ product, refreshProducts }) => {

  const deleteProduct = async () => {
    try {
      await API.delete(`/api/products/${product._id}`);
      refreshProducts();
    } catch (err) {
  console.log(err);
  alert("Delete failed ❌");
}

  };

  return (
    <div className="border p-4 rounded shadow">

      <h3 className="font-bold text-lg">{product.productName}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Category: {product.category}</p>
      <p>Company: {product.company}</p>

      <button
        onClick={deleteProduct}
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>

    </div>
  );
};

export default ProductCard;
