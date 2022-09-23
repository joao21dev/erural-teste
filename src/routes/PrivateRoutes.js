import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../pages/home/Home";

const PrivateRoutes = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default PrivateRoutes;
