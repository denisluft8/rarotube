import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/";
import api from "../../Services/api";
import { ButtonDiv, InsideDiv, PanelStyled } from "./LoginStyled";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const redirect = useNavigate();
  const [form, setForm] = useState<{
    email: string;
    senha: string;
  }>({
    email: "",
    senha: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const loginSuccess = (res: any) => {
    localStorage.setItem("token", res.data.access_token);
    localStorage.setItem("id", res.data.id);
    localStorage.setItem("name", res.data.nome);
    console.log(res);
    setIsLogged(true);
    setError(false);
    setMessage("Sucesso");
    setTimeout(() => {
      redirect("/home");
    }, 1000);
  };

  const loginError = (res: any) => {
    setError(true);
    res.response.data.statusCode === 401
      ? setMessage("Usuário ou senha inválidos")
      : setMessage("Falha de autenticação.");
  };

  const onLog = (e: any) => {
    e.preventDefault();
    api
      .post("/auth/login", form)
      .then((res) => loginSuccess(res))
      .catch((error) => loginError(error));
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
        {isLogged ? <span style={{ color: "green" }}>{message}</span> : <></>}
        {error ? <span style={{ color: "#FF1010" }}>{message}</span> : <></>}
      </InsideDiv>
    </PanelStyled>
  );
};
export default Login;
