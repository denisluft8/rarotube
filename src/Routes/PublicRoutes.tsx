import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChangePassword, Login, NotFound, RequestCode, Signup } from "../pages";

const PublicRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/requestcode" element={<RequestCode />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default PublicRoutes;
