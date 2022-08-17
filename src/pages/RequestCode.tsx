import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Input } from "../components";
import { fontSize, lineHeight } from "../styles/theme";

const PanelStyled = styled.div`
  width: 510px;
  height: 279px;
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
    width: 243px;
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
