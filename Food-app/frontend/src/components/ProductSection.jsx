import ProductCard from "./ProductCard";

function ProductSection({ title }) {
  const products = [
    { name: "Classic Burger Meal", price: "230.30", img: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Burger & Fries", price: "210.30", img: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Combo Special", price: "250.10", img: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Meal Box", price: "150.80", img: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  return (
    <div className="container-fluid px-5 my-5">
      <h3 className="fw-bold text-warning mb-3">{title}</h3>

      <div className="row g-4">
        {products.map((item, i) => (
          <div key={i} className="col-lg-3 col-md-4 col-sm-6">
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
