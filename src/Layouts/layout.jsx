import React from "react";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbars />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
