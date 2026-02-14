import { useState } from "react";
import API from "../api/api";

const ProductForm = ({ refreshProducts }) => {
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    rating: "",
    discount: "",
    availability: "",
    category: "",
    company: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/products", product);
      alert("Product added successfully ✅");
      refreshProducts();

      setProduct({
        productName: "",
        price: "",
        rating: "",
        discount: "",
        availability: "",
        category: "",
        company: "",
      });
    } catch (err) {
  console.log(err);
  alert("Delete failed ❌");
}

  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 mb-6">

      <input name="productName" placeholder="Product Name" value={product.productName} onChange={handleChange} />
      <input name="price" placeholder="Price" value={product.price} onChange={handleChange} />
      <input name="rating" placeholder="Rating" value={product.rating} onChange={handleChange} />
      <input name="discount" placeholder="Discount" value={product.discount} onChange={handleChange} />
      <input name="availability" placeholder="Availability" value={product.availability} onChange={handleChange} />
      <input name="category" placeholder="Category" value={product.category} onChange={handleChange} />
      <input name="company" placeholder="Company" value={product.company} onChange={handleChange} />

      <button className="col-span-2 bg-blue-600 text-white p-2 rounded">
        Add Product
      </button>

    </form>
  );
};

export default ProductForm;
