import styled from "styled-components";
import { colors, fontSize, lineHeight } from "../../styles/theme";
import Button from "../Button";
import Input from "../Input";

const DivStyled = styled.div`
  width: 510px;
  height: 409px;
  background: ${(props) => props.theme.colors.boxBackground};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  backdrop-filter: blur(20px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;

  & > h1 {
    font-size: ${fontSize["heading4"]};
    line-height: ${lineHeight["heading4"]};
    width: 142px;
    height: 39px;
    color: ${(props) => props.theme.colors.primary};
  }

  & > a {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Panel = () => (
  <DivStyled>
    <h1>Bem Vindo</h1>
    <Input
      height="40px"
      onBlur={() => console.log("onBlur")}
      onChange={() => console.log("onChange")}
      placeholder="Email"
      width="450px"
    />
    <Input
      height="40px"
      onBlur={() => console.log("onBlur")}
      onChange={() => console.log("onChange")}
      placeholder="Senha"
      width="450px"
    />
    <a>Esqueci minha senha</a>
    <div>
      <a>Não possui uma conta? Faça seu cadastro!</a>
      <Button
        onClick={() => console.log("onclick")}
        text={"Entrar"}
        disabled={false}
      />
    </div>
  </DivStyled>
);
export default Panel;
