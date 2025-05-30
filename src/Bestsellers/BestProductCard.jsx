import React from "react";
import { useCart } from "../components/Pages/CartContext"; // Import Cart context
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../Context/AuthContext";

const BestProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Get addToCart function from Cart context
  const navigate = useNavigate(); // Hook to navigate between pages
  const user = useAuth();

  const handleBuyNow = () => {
    if (!user) {
      alert("Please login to buy products!");
      navigate("/login");
      return;
    }
    addToCart(product); // Add product to cart
    navigate("/cart"); // Redirect to Cart page
  };

  return (
    <div className="product-card">
      {product.sale && <span className="sale-badge">Sale</span>}
      <div className="image-container">
        <img src={`http://localhost:5000/images/${product.image}`} alt={product.name} className="product-image" />
        <div className="button-overlay">
          <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <div className="price">
          <span className="discount-price">${product.discountPrice}</span>
          <span className="original-price">${product.originalPrice}</span>
        </div>
        <div className="sizes">
          {product.sizes.map((size) => (
            <button key={size}>{size}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProductCard;
