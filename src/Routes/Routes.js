import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../pages/inicio";
import MenuPage from "../pages/MenuPage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";

const LasRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default LasRoutes;
