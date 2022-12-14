import api from "../../Services/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Input } from "../../components";
import { ButtonDiv, InsideForm, PanelStyled } from "./SignupStyled";

const Signup = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const redirect = useNavigate();
  const [form, setForm] = useState<{
    nome: string;
    email: string;
    senha: string;
    confirma: string;
    codigoAcesso: string;
  }>({
    nome: "",
    email: "",
    senha: "",
    confirma: "",
    codigoAcesso: "",
  });

  const onSave = (e: any) => {
    e.preventDefault();
    api
      .post("auth/cadastrar", form)
      .then(signupSuccess)
      .catch((error) => signupError(error));
  };

  const signupSuccess = () => {
    setSignedUp(true);
    setMessage("Concluído, faça login!");
    setTimeout(() => {
      redirect("/");
    }, 1000);
  };

  const signupError = (res: any) => {
    setError(res.response.data.statusCode);
    console.log(error);
    res.response.data.statusCode === 400
      ? setMessage("Usuário já existe. Clique aqui para redefinir senha!")
      : setMessage("Falha de autenticação.");
  };

  return (
    <PanelStyled>
      <h4>Bem Vindo!</h4>
      <InsideForm>
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, nome: val })}
          placeholder="Nome"
          width="450px"
          value={form.nome}
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, email: val })}
          placeholder="Email"
          width="450px"
          value={form.email}
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, senha: val })}
          placeholder="Senha"
          type="password"
          value={form.senha}
          width="450px"
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, confirma: val })}
          placeholder="Confirmar senha"
          type="password"
          value={form.confirma}
          width="450px"
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, codigoAcesso: val })}
          placeholder="Código de acesso"
          value={form.codigoAcesso}
          width="450px"
        />
        <ButtonDiv>
          <Link to="/">Já possui uma conta? Faça o login!</Link>
          <Button
            onClick={(e: any) => onSave(e)}
            text={"Cadastrar"}
            disabled={false}
          />
        </ButtonDiv>
        {signedUp === true ? (
          <span style={{ color: "green" }}>{message}</span>
        ) : error == "400" ? (
          <Link style={{ color: "#FF1010" }} to="/changepassword">
            {message}
          </Link>
        ) : (
          <span style={{ color: "#FF1010" }}>{message}</span>
        )}
      </InsideForm>
    </PanelStyled>
  );
};
export default Signup;
