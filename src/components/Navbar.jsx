import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import { useCart } from "./Pages/CartContext";
import { useAuth } from "../Context/AuthContext";

export const Navbar = () => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isLatestOpen, setIsLatestOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav>
      {/* Logo */}
      <div>MyApp</div>

      {/* Menu Items */}
      <ul>
        <li><Link to="/">Home</Link></li>

        <li 
          onMouseEnter={() => setIsLatestOpen(true)}
          onMouseLeave={() => setIsLatestOpen(false)}
        >
          Latest
          {isLatestOpen && (
            <ul onMouseEnter={() => setIsLatestOpen(true)} onMouseLeave={() => setIsLatestOpen(false)}>
              <li><Link to="/latest-arrivals">What's New</Link></li>
              <li><Link to="/bestselling">Best Selling</Link></li>
            </ul>
          )}
        </li>

        <li 
          onMouseEnter={() => setIsCollectionOpen(true)}
          onMouseLeave={() => setIsCollectionOpen(false)}
        >
          Collections
          {isCollectionOpen && (
            <ul onMouseEnter={() => setIsCollectionOpen(true)} onMouseLeave={() => setIsCollectionOpen(false)}>
              <li><Link to="/mens-collection">Men's Collection</Link></li>
              <li><Link to="/womens-collection">Women's Collection</Link></li>
            </ul>
          )}
        </li>

        <li 
          onMouseEnter={() => setIsPagesOpen(true)}
          onMouseLeave={() => setIsPagesOpen(false)}
        >
          Pages
          {isPagesOpen && (
            <ul onMouseEnter={() => setIsPagesOpen(true)} onMouseLeave={() => setIsPagesOpen(false)}>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ's</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          )}
        </li>

        {/* Cart Icon */}
        <div className="cart-icon">
          <Link to="/cart">🛒 Cart ({cart.length})</Link>
        </div>

        {/* Profile Icon */}
        <div className="profile-icon">
          👤
          <div className="profile-dropdown">
            {user ? (
              <>
                <span>Welcome, {user.name || "User"}</span>
                <Link to="/profile">Profile</Link>
                <button onClick={logout} className="logout-btn">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
