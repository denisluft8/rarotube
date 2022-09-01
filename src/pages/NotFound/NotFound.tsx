import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { PanelStyled } from "./NotFoundStyled";


const NotFound = () => {
  const redirect = useNavigate()
  const handleRedirect = () => {
    redirect("/")
  }
  return(
  <PanelStyled>
    <h4>Ops, essa página não foi encontrada!</h4>
    <Button
      onClick={handleRedirect}
      text={"Ir para a home"}
      disabled={false}
    />
  </PanelStyled>
);}

export default NotFound;
