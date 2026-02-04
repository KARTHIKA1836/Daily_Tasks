import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
        <ProductCard name="Cheese Burger" price="12.5" image="https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg"/>
        <ProductCard name="French Fries" price="6.2" image="https://images.pexels.com/photos/32421783/pexels-photo-32421783.jpeg"/>
      </div>
    </>
  );
}

export default App;
