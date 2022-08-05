import styled from "styled-components";

interface CardProps {
  width: string;
  height: string;
}

const CardStyled = styled.div<CardProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4),
    inset 1px 1px 0px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 10px;
`;

const Card = ({ height, width }: CardProps) => (
  <CardStyled height={height} width={width}></CardStyled>
);

export default Card;
