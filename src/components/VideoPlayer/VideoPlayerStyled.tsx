import styled from "styled-components";
import { colors, fontSize } from "../../styles/theme";

export const IconsStyled = styled.div`
  & > svg {
    margin: 5px;
  }
`;

export const InfoContainerStyled = styled.div`
  width: 817.43px;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fontSize["body-small"]};
  line-height: ${fontSize["body-small"]};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 26px;
  margin: 5px;
  justify-content: space-between;
`;

export const VideoContainerStyled = styled.div`
  border-radius: 10px;
  width: 817.43px;
  height: 630px;
  display: flex;
  flex-direction: column;

  .react-player {
    border-radius: 10px;
  }
`;

export const DescriptionStyled = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fontSize["body"]};
  font-weight: 400;
  line-height: ${fontSize["body"]};
  margin: 7px 0px;
`;

export const TitleContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 8px;
`;
