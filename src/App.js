import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <PrivateRoutes />
            </ProtectedRoute>
          }
        />
        {/**
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      */}
      </Routes>
    </>
  );
}

export default App;
