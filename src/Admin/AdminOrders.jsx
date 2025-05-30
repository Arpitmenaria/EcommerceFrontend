import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./AdminOrders.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="admin-orders">
      <h1>Manage Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id} | Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOrders;
