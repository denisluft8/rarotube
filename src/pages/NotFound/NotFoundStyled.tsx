import styled from "styled-components";
import { fontSize, lineHeight } from "../../styles/theme";

export const PanelStyled = styled.div`
  width: 510px;
  height: 169px;
  background: ${(props) => props.theme.colors.boxBackground};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  backdrop-filter: blur(20px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h4 {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${fontSize["heading4"]};
    font-style: normal;
    font-weight: 600;
    height: 39px;
    line-height: ${lineHeight["heading4"]};
    width: 465px;
    margin-top: 20px;
  }

  & > button {
    margin-top: 40px;
  }
`;
