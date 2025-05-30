import React, { useState } from "react";
import { useAuth } from "../../../Context/AuthContext";
import './Login.css'

const Register = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
          alert("Registration successful!");
          localStorage.setItem("token", data.token);  // Save token
          login(data.user);  // Store user data in context
      } else {
          alert(data.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /> <br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /> <br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /> <br />
        <button type="submit" className="subbutton">Register</button>
      </form>
    </div>
  );
};

export default Register;
