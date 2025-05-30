import React, { useEffect, useState } from "react";
import LatestProductCard from "./LatestProductCard"; 
import './LatestProduct.css';
import fetchProducts from "../../api/ftechProducts";

const LatestProductList = () => {
  const [products, setProducts] = useState([]); // Store fetched products

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts("Latest Arivals");
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <div className="product-list-container"></div>
      <h1 className="heading1">Latest Arrivals</h1>
    <div className="product-list">
      {products.map((product) => (
        <LatestProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default LatestProductList;
