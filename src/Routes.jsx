import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Cart from "./components/Pages/Cart";
import LatestProductList from "./components/Latestarrivals/LatestProductList";
import BestProductList from "./Bestsellers/BestProductList"
import MenProductList from "./components/Menscollection/MenProductList";
import WomenProductList from "./components/Womenscollection/WomenProductList";
import About from "./components/Pages/About";
import Faq from "./components/Pages/Faq"
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Auth/Login";
import Register from "./components/Pages/Auth/Register";
import Checkout from "./components/Pages/Checkout";

//Admin Panel 
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import ProtectedAdminRoute from "./Admin/ProtectedAdminRoute";
import AdminOrders from "./Admin/AdminOrders";
import AdminProducts from "./Admin/AdminProducts";
import AdminUsers from "./Admin/AdminUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // This includes Navbar and Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "latest-arrivals", element: <LatestProductList /> },
      { path: "bestselling", element: <BestProductList /> },
      { path: "mens-collection", element: <MenProductList /> },
      { path: "womens-collection", element: <WomenProductList /> },
      { path: "about", element: <About /> },
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login />},
      { path: "register", element: <Register />},
      { path: "/checkout", element: <Checkout />},
    ],
  },
  // Admin Routes
  {
    path: "/admin",
    element: (
      <ProtectedAdminRoute>
        <AdminDashboard />
      </ProtectedAdminRoute>
    ),
  },
  { path: "/admin/login", element: <AdminLogin /> },
  {
    path: "/admin/products",
    element: (
      <ProtectedAdminRoute>
        <AdminProducts />
      </ProtectedAdminRoute>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdminRoute>
        <AdminOrders />
      </ProtectedAdminRoute>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <ProtectedAdminRoute>
        <AdminUsers />
      </ProtectedAdminRoute>
    ),
  },
]);

export default router;
