import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import api from "../../Services/api";
import { ButtonDiv, InsideForm, PanelStyled } from "./ChangePasswordStyled";

const ChangePassword = () => {
  const [form, setForm] = useState<{
    senha: string;
    codigoAcesso: string;
  }>({
    codigoAcesso: "",
    senha: "",
  });

  const changePassword = (e: any) => {
    e.preventDefault();
    api
      .patch("auth/recuperar-senha", form)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <PanelStyled>
      <h4>Altere sua senha!</h4>
      <InsideForm>
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, codigoAcesso: val })}
          placeholder="Código"
          width="450px"
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, senha: val })}
          placeholder="Nova senha"
          type="password"
          width="450px"
        />
        <Input
          height="40px"
          onChange={() => console.log("onChange")}
          placeholder="Confirmar nova senha"
          type="password"
          width="450px"
        />
        <ButtonDiv>
          <Link to="/requestcode">
            Não possui um código? Solicite um agora!
          </Link>
          <Button
            onClick={(e: any) => changePassword(e)}
            text={"Alterar"}
            disabled={false}
          />
        </ButtonDiv>
      </InsideForm>
    </PanelStyled>
  );
};
export default ChangePassword;
