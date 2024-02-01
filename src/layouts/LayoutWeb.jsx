import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutWeb = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default LayoutWeb;
