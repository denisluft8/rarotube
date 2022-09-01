import { Button, Input } from "../../components";
import { Link } from "react-router-dom";
import { ButtonDiv, InsideForm, PanelStyled } from "./RequestCodeStyled";
import { useState } from "react";
import api from "../../Services/api";

const RequestCode = () => {
  const [form, setForm] = useState<{
    email: string;
  }>({
    email: "",
  });

  const requestCode = (e: any) => {
    e.preventDefault();
    api
      .patch("auth/solicitar-codigo", form)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <PanelStyled>
      <h4>Solicite um código!</h4>
      <InsideForm>
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, email: val })}
          placeholder="Email"
          width="450px"
        />
        <ButtonDiv>
          <Link to="/changepassword">
            Já possui um código? Troque sua senha!
          </Link>
          <Button
            onClick={(e: any) => requestCode(e)}
            text={"Solicitar"}
            disabled={false}
          />
        </ButtonDiv>
      </InsideForm>
    </PanelStyled>
  );
};

export default RequestCode;
