import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./Layout";
import ElFooter from "./components/footer/ElFooter";
import Inicio from "./pages/inicio";
import ProductPage from "./pages/ProductPage";
import Prueba from "./components/prueba/prueba";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Teko:wght@300&display=swap"
        rel="stylesheet"
      />
      {/* <Prueba /> */}
      {/* <Inicio /> */}
      {/* <ProductPage /> */}
      {/* <MenuPage /> */}
      <CartPage />
    </Layout>
  </React.StrictMode>
);
