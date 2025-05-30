import React from "react";
import { useCart } from "../Pages/CartContext"; 
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../../Context/AuthContext"; 

const LatestProductCard = ({ product }) => {
  const { addToCart } = useCart(); 
  const navigate = useNavigate(); 
  const { user } = useAuth(); 

  const handleAddToCart = () => {
    addToCart(product, navigate); // Pass `navigate` as a parameter
    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
    if (!user) {
      alert("Please login to buy products!");
      navigate("/login");
      return;
    }
    addToCart(product, navigate); 
    navigate("/cart"); 
  };

  return (
    <div className="product-card">
      {product.sale && <span className="sale-badge">Sale</span>}
      <div className="image-container">
        <img src={`http://localhost:5000/images/${product.image}`} alt={product.name} className="product-image" />
        <div className="button-overlay">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
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

export default LatestProductCard;
