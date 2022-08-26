import { Button, Input } from "../../components";
import { Link } from "react-router-dom";
import { ButtonDiv, InsideForm, PanelStyled } from "./RequestCodeStyled";


const RequestCode = () => (
  <PanelStyled>
    <h4>Solicite um código!</h4>
    <InsideForm>
      <Input
        height="40px"
        onBlur={() => console.log("onBlur")}
        onChange={() => console.log("onChange")}
        placeholder="Email"
        width="450px"
      />
      <ButtonDiv>
        <Link to="/changepassword">Já possui um código? Troque sua senha!</Link>
        <Button
          onClick={() => console.log("onclick")}
          text={"Alterar"}
          disabled={false}
        />
      </ButtonDiv>
    </InsideForm>
  </PanelStyled>
);

export default RequestCode;
