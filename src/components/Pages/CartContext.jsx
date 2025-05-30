import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const navigate = useNavigate(); 

  // useEffect(() => {
  //   setNavigateFunction(() => useNavigate());
  // },[]);

  //user login check
  const isUserLoggedIn = () => {
    return localStorage.getItem("user");
  };

  const addToCart = (product, navigate) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Please login to add items to your cart.");
        navigate("/login");
        return;
    }

    setCart([...cart, product]);
    alert("Product added to cart!");
};

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
