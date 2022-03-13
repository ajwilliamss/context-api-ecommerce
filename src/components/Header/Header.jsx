import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Context e-Commerce</h1>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart">Checkout ({cart.length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
