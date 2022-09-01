import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, VideoPage } from "../pages";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
    </>
  );
};

export default PrivateRoutes;
