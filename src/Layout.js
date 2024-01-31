// Layout.js
import React from "react";
import ElHeader from "./components/ElHeader";
import ElFooter from "./components/footer/ElFooter";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="sticky top-0">
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
