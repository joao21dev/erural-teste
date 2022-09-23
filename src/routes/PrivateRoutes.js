import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import CreateRoom from "../pages/createRoom/CreateRoom";
import Home from "../pages/home/Home";

const PrivateRoutes = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-room" element={<CreateRoom />} />
        </Routes>
      </div>
    </>
  );
};

export default PrivateRoutes;
