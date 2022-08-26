import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/theme";
import { SkeletonCardProps } from "./SkeletonCard";

export const FadeInAnimation = keyframes`  
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;
export const SkeletonCardStyled = styled.div`
  margin-top: 10px;
  width: 229.2px;
  height: 150px;
  border-radius: 10px;
  background: ${colors["light-silver"]};
  display: flex;
  animation-name: ${FadeInAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const FooterStyled = styled.div`
  width: 229.2px;
  height: 44.91px;
  border-radius: 10px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors["philippine-grey"]};
  animation-name: ${FadeInAnimation};
`;

export const TextContainerStyled = styled.div`
  padding-top: 8px;
  padding-bottom: 2px;
`;

export const RowStyled = styled.div<SkeletonCardProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: 0;
  margin-left: 14px;
  margin-bottom: 4px;
  background: ${colors["davys-grey"]};
  border-radius: 10px;
`;
