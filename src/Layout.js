// Layout.js
import React from "react";
import ElHeader from "./components/ElHeader";
import ElFooter from "./components/footer/ElFooter";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <ElHeader />
      </header>
      <main>{children}</main>
      <footer>
        <ElFooter />
      </footer>
    </div>
  );
};

export default Layout;
