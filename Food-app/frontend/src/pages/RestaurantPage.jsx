import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategoryTabs from "../components/CategoryTabs";
import OfferCard from "../components/OfferCard";
import ProductCard from "../components/ProductCard";

import offers from "../data/offers";
import products from "../data/products";

export default function RestaurantPage() {
  return (
    <>
      <Navbar />

      <div className="container-fluid mt-4 px-5">

        <HeroSection />

        <CategoryTabs />

        <div className="row g-4 my-4">
          {offers.map(o => (
            <div className="col-md-4" key={o.id}>
              <OfferCard offer={o} />
            </div>
          ))}
        </div>

        <h3 className="section-title">Burgers</h3>
        <div className="row g-4">
          {products.burgers.map(p => (
            <div className="col-md-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
