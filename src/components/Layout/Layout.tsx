import Header from "../Header/Header";
import light from "../../styles/lightTheme";
import dark from "../../styles/darkTheme";
import { useState } from "react";
import Footer from "../Footer/Footer";
import styled, { ThemeProvider } from "styled-components";
import image from "../../assets/backgroundHood.svg";

interface LayoutProps {
  children: React.ReactNode;
}

const DivStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

const Layout = ({ children }: LayoutProps) => {
  const [theme, SetTheme] = useState(dark);

  const onChangeTheme = () => {
    SetTheme(theme.name === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header onChangeTheme={onChangeTheme} isOn />
      <DivStyled>{children}</DivStyled>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
