import { GlobalStyle } from "./styles/theme";
import dark from "../src/styles/darkTheme";
import light from "../src/styles/lightTheme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Header, Footer } from "./components";
import Home from "./pages/Home";

const App = () => {
  const [theme, SetTheme] = useState(dark);

  const onChangeTheme = () => {
    SetTheme(theme.name === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onChangeTheme={onChangeTheme} isOn />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};
export default App;
