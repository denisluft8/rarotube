import { Button, Input } from "../../components";
import { PanelStyled } from "./NotFoundStyled";


const NotFound = () => (
  <PanelStyled>
    <h4>Ops, essa página não foi encontrada!</h4>
    <Button
      onClick={() => console.log("onclick")}
      text={"Ir para a home"}
      disabled={false}
    />
  </PanelStyled>
);

export default NotFound;
