import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import CreateRoom from "../pages/createRoom/CreateRoom";
import Home from "../pages/home/Home";
import Room from "../pages/room/Room";

const PrivateRoutes = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path='/room/:roomId' element={<Room />} />
        </Routes>
      </div>
    </>
  );
};

export default PrivateRoutes;
