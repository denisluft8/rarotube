import styled from "styled-components";
import { VideoCardProps } from "./VideoCard";
import { colors, fontSize, lineHeight } from "../../styles/theme";

export const VideoCardStyled = styled.div<VideoCardProps>`
  background: url(${(props) => props.image});
  background-size: cover;
  border-radius: 10px;
  display: flex;
  height: 150px;
  width: 229.2px;
`;

export const FooterStyled = styled.div`
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  height: 44.91px;
  justify-content: space-between;
  margin-top: auto;
  width: 229.2px;

  & > button {
    background-color: transparent;
    width: 22px;
    margin-right: 09px;
    border: none;
  }
`;

export const TextContainerStyled = styled.div`
  padding-bottom: 2px;
  padding-top: 8px;
`;

export const TitleStyled = styled.p`
  color: white;
  font-size: ${fontSize["body-small"]};
  font-weight: 500;
  height: 20px;
  line-height: ${lineHeight["body-small"]};
  margin: 0;
  padding-left: 14px;
`;
export const DateStyled = styled.p`
  color: ${colors["light-silver"]};
  font-size: ${fontSize["extra-small"]};
  font-weight: 400;
  height: 15px;
  line-height: ${lineHeight["extra-small"]};
  margin: 0;
  padding-left: 14px;
`;
