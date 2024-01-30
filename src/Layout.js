// Layout.js
import React from "react";
import ElHeader from "./components/ElHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <ElHeader />
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Mi Sitio Web</p>
      </footer>
    </div>
  );
};

export default Layout;
