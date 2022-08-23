import { GlobalStyle } from './styles/theme'
import dark from '../src/styles/darkTheme'
import light from '../src/styles/lightTheme'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { Header, Footer, Layout } from './components'
import Login from './pages/Login'
import Signin from './pages/Signup'
import ChangePassword from './pages/ChangePassword'
import RequestCode from './pages/RequestCode'
import NotFound from './pages/NotFound'
import {
  Routes,
  Route,
  BrowserRouter as Router,
  BrowserRouter
} from 'react-router-dom'
import Home from './pages/Home'

const App = () => (
  <Layout>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/requestcode" element={<RequestCode />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </Layout>
)
export default App
