import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./AdminProducts.css";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="admin-products">
      <h1>Manage Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProducts;
