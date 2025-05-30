import React, { useEffect, useState } from "react";
import BestProductCard from "./BestProductCard";
import './BestProduct.css';
import fetchProducts from "../api/ftechProducts";

const BestProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts("Best Sellers");
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1 className="heading1">Browse our Best Selling Products</h1>
    <div className="product-list">
      {products.map((product) => (
        <BestProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};


export default BestProductList;
