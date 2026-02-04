import { ShoppingCart, User } from "lucide-react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">OrderNow</h1>

      <ul className="nav-links">
        <li>Home</li>
        <li>Offers</li>
        <li>Restaurants</li>
        <li>Track Order</li>
      </ul>

      <div className="nav-icons">
        <ShoppingCart />
        <User />
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
