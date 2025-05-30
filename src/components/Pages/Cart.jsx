import React from "react";
import { useCart } from "../Pages/CartContext"; // Import cart context
import { useNavigate } from "react-router-dom";
import "./Cart.css"; // Import CSS for styling

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Get cart items and remove function
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    navigate("/checkout"); // Redirect to checkout page
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p>Price: ${item.discountPrice}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
