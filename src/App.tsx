import { GlobalStyle } from './styles/theme'
import dark from '../src/styles/darkTheme'
import light from '../src/styles/lightTheme'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { Header, Footer } from './components'
import Login from './pages/Login'
import Signin from './pages/Signin'
import ChangePassword from './pages/ChangePassword'
import RequestCode from './pages/RequestCode'
import NotFound from './pages/NotFound'
import {
  Routes,
  Route,
  BrowserRouter as Router,
  BrowserRouter
} from 'react-router-dom'

const App = () => {
  const [theme, SetTheme] = useState(dark)

  const onChangeTheme = () => {
    SetTheme(theme.name === 'light' ? dark : light)
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header onChangeTheme={onChangeTheme} isOn />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/requestcode" element={<RequestCode />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}
export default App
