import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Input } from "../components";
import { fontSize, lineHeight } from "../styles/theme";

const PanelStyled = styled.div`
  width: 510px;
  height: 554px;
  background: ${(props) => props.theme.colors.boxBackground};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  backdrop-filter: blur(20px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  & > h4 {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${fontSize["heading4"]};
    font-style: normal;
    font-weight: 600;
    height: 39px;
    line-height: ${lineHeight["heading4"]};
    width: 150px;
    margin-left: 30px;
    margin-top: 20px;
  }
`;
const ButtonDiv = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

  & > a {
    color: ${(props) => props.theme.colors.secondary};
    font-family: "Plus Jakarta Sans";
    font-size: ${fontSize["body-small"]};
    font-style: normal;
    font-weight: 500;
    height: 20px;
    line-height: ${lineHeight["body-small"]};
    width: 263px;
    margin-right: 28px;
  }
`;

const InsideForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > input {
    height: 40px;
    margin-top: 30px;
  }
`;

const Signin = () => (
  <PanelStyled>
    <h4>Bem Vindo!</h4>
    <InsideForm>
      <Input
        height="40px"
        onBlur={() => console.log("onBlur")}
        onChange={() => console.log("onChange")}
        placeholder="Nome"
        width="450px"
      />
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
        type="password"
        width="450px"
      />
      <Input
        height="40px"
        onBlur={() => console.log("onBlur")}
        onChange={() => console.log("onChange")}
        placeholder="Confirmar senha"
        type="password"
        width="450px"
      />
      <Input
        height="40px"
        onBlur={() => console.log("onBlur")}
        onChange={() => console.log("onChange")}
        placeholder="Código de acesso"
        width="450px"
      />
      <ButtonDiv>
        <Link to="/">Já possui uma conta? Faça o login!</Link>
        <Button
          onClick={() => console.log("onclick")}
          text={"Cadastrar"}
          disabled={false}
        />
      </ButtonDiv>
    </InsideForm>
  </PanelStyled>
);

export default Signin;
