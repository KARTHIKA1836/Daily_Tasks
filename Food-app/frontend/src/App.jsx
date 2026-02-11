import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryTabs from "./components/CategoryTabs";
import OfferRow from "./components/OfferRow";
import ProductSection from "./components/ProductSection";
import InfoMapSection from "./components/InfoMapSection";
import Reviews from "./components/Reviews";
import SimilarRestaurants from "./components/SimilarRestaurants";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryTabs />
       <OfferRow />
      <ProductSection title="Burgers" />
      <ProductSection title="Fries" />
      <ProductSection title="Cold Drinks" />
      <InfoMapSection />
      <Reviews />
      <SimilarRestaurants />
      <Footer />

    </>
  );
}

export default App;
