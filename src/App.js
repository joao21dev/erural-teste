import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/Auth.Context";
import { RoomContextProvider } from "./context/RoomContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <RoomContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <PrivateRoutes />
                  </ProtectedRoute>
                }
              />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </RoomContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
