import { GlobalStyle } from './styles/theme'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Layout } from './components'
import {
  ChangePassword,
  Home,
  Login,
  NotFound,
  RequestCode,
  Signup,
  VideoPage
} from './pages'

const App = () => (
  <Layout>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/requestcode" element={<RequestCode />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Layout>
)
export default App
