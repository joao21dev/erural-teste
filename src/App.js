import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from "./context/PostContext";
import { RoomContextProvider } from "./context/RoomContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <RoomContextProvider>
          <PostContextProvider>
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
          </PostContextProvider>
        </RoomContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
