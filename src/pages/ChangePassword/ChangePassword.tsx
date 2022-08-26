import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { ButtonDiv, InsideForm, PanelStyled } from "./ChangePasswordStyled";

const ChangePassword = () => (
  <PanelStyled>
    <h4>Altere sua senha!</h4>
    <InsideForm>
      <Input
        height="40px"
        onBlur={() => console.log("onBlur")}
        onChange={() => console.log("onChange")}
        placeholder="Código"
        width="450px"
      />
      <Input
        height="40px"
        onBlur={() => console.log("onBlur")}
        onChange={() => console.log("onChange")}
        placeholder="Nova senha"
        type="password"
        width="450px"
      />
      <Input
        height="40px"
        onBlur={() => console.log("onBlur")}
        onChange={() => console.log("onChange")}
        placeholder="Confirmar nova senha"
        type="password"
        width="450px"
      />
      <ButtonDiv>
        <Link to="/requestcode">Não possui um código? Solicite um agora!</Link>
        <Button
          onClick={() => console.log("onclick")}
          text={"Alterar"}
          disabled={false}
        />
      </ButtonDiv>
    </InsideForm>
  </PanelStyled>
);

export default ChangePassword;
