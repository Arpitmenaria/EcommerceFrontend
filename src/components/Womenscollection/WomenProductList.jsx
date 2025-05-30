import React from "react";
import { useEffect, useState } from "react";
import WomenProductCard from "./WomenProductCard";
import fetchProducts from "../../api/ftechProducts"; 
import './WomenProduct.css';

const WomenProductList = () => {
  const [products, setProducts] = useState([]); // Store fetched products

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts("Womens Product");
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <WomenProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default WomenProductList;
