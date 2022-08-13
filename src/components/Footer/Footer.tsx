import styled from "styled-components";
import { InstaLogo, LinkedinLogo, TwitterLogo } from "../Icons";

const FooterStyled = styled.footer`
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    margin: 10px;
  }
`;

const Footer = () => (
  <FooterStyled>
    <InstaLogo href={"https://www.instagram.com/raroacademy/"} />
    <TwitterLogo href={"https://mobile.twitter.com/raroacademy"} />
    <LinkedinLogo href={"https://br.linkedin.com/showcase/raroacademy"} />
  </FooterStyled>
);

export default Footer;
