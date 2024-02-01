import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const LayoutAdmin = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Sidebar />
        <main className="m-[100px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
