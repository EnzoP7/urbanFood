import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Layout from "./Layout";
import LasRoutes from "./Routes/Routes";

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

      <LasRoutes />
    </Layout>
  </React.StrictMode>
);
