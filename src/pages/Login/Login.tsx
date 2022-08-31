import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components/";
import api from "../../Services/api";
import { ButtonDiv, InsideDiv, PanelStyled } from "./LoginStyled";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [form, setForm] = useState<{
    email: string;
    senha: string;
  }>({
    email: "",
    senha: "",
  });

  const onLog = (e: any) => {
    e.preventDefault();
    api
      .post("/auth/login", form)
      .then((res) => localStorage.setItem("token", res.data.access_token))
      .catch((error) => console.log(error));
  };
  return (
    <PanelStyled>
      <h4>Bem Vindo!</h4>
      <InsideDiv>
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, email: val })}
          placeholder="Email"
          value={form.email}
          width="450px"
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, senha: val })}
          placeholder="Senha"
          type="password"
          value={form.senha}
          width="450px"
        />
        <Link to="/changepassword"> Esqueci minha senha</Link>
        <ButtonDiv>
          <Link to="/signup">Não possui uma conta? Faça seu cadastro!</Link>
          <Button onClick={(e: any) => onLog(e)} text={"Entrar"} />
        </ButtonDiv>
      </InsideDiv>
    </PanelStyled>
  );
};
export default Login;
