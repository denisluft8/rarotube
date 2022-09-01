import { GlobalStyle } from "./styles/theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import {
  ChangePassword,
  Home,
  Login,
  NotFound,
  RequestCode,
  Signup,
  VideoPage,
} from "./pages";
import VideoContextProvider from "./Contexts/VideoContextProvider";

const App = () => (
  <Layout>
    <VideoContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/requestcode" element={<RequestCode />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </VideoContextProvider>
  </Layout>
);
export default App;
