import React from "react";
import MenProductCard from "./MenProductCard";
import './MenProduct.css';
import { useState, useEffect } from "react";
import fetchProducts from "../../api/ftechProducts";

const MenProductList = () => {
  const [products, setProducts] = useState([]); // Store fetched products

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts("Mens Product");
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <MenProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MenProductList;
