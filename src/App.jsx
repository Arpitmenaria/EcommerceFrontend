import React from "react";
import { RouterProvider } from "react-router-dom";
import './App.css'

import router from "./Routes";
import { CartProvider } from "./components/Pages/CartContext";


const App = () => {


  return (
    <>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
      </>
  )
}

export default App;
