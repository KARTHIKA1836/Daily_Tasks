import { Star, Clock } from "lucide-react";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>McDonald's East London</h2>

        <div className="hero-info">
          <span><Star /> 3.4 Rating</span>
          <span><Clock /> 20–30 mins</span>
        </div>

        <button className="order-btn">Order Now</button>
      </div>
      <img src="https://i.imgur.com/2nCt3Sbl.png" className="hero-img" alt="food" />
    </div>
  );
}

export default HeroSection;
