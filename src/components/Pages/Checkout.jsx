import React, { useState, useEffect } from "react";
import axios from "axios";
import './Checkout.css';

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);  // ✅ New state to track script load

  // ✅ Step 3: Load Razorpay Script on Component Mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setIsRazorpayLoaded(true); // ✅ Confirm script loaded
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You need to log in before placing an order.");
      return;
    }

    if (!isRazorpayLoaded) {
      alert("Razorpay SDK is still loading. Please try again.");
      return;
    }

    try {
      const checkoutResponse = await axios.post(
        "http://localhost:5000/api/checkout",
        { address },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (checkoutResponse.status !== 201) {
        alert(checkoutResponse.data.message || "Error placing order.");
        return;
      }

      const paymentResponse = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount: 500, currency: "INR" }
      );

      const { order } = paymentResponse.data;

      const options = {
        key: "rzp_test_M4iRM6fthLXpHX",  // ✅ Correct Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Ecommerce Store",
        description: "Purchase Product",
        order_id: order.id,
        handler: async (response) => {
          alert("Payment Successful!");

          await axios.post("http://localhost:5000/api/orders", {
            orderId: order.id,
            paymentId: response.razorpay_payment_id,
          });

          alert("Order Placed Successfully!");
        },
        prefill: {
          name: "Your Name",
          email: "yourname@gmail.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);  // ✅ Razorpay now correctly initialized
      rzp.open();
    } catch (error) {
      console.error("Error placing order:", error.response?.data || error);
      alert(error.response?.data?.message || "Error placing order.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <textarea
        value={address}
        onChange={handleChange}
        placeholder="Enter your delivery address"
        required
      />
      <br />
      <button className="checkout-button" onClick={handleCheckout}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
