import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";

interface FavoriteIconProps {
  filled?: boolean;
}

const SvgStyled = styled.svg`
  box-sizing: border-box;
  width: 19.25px;
  height: 17.96px;
  margin-right: 14px;
  &:hover {
    fill: ${colors["red-candy-apple"]};
    & > path {
      stroke: ${colors["red-candy-apple"]};
    }
  }
`;

const FavoriteIcon = ({ filled }: FavoriteIconProps) => {
  const [colorFill, setColorFill] = useState(filled ? "red" : "none");
  const [strokeColor, setStrokeColor] = useState(filled ? "red" : "white");

  const handleClick = () => {
    colorFill === "red" ? setColorFill("none") : setColorFill("red");
    strokeColor === "red" ? setStrokeColor("white") : setStrokeColor("red");
  };

  return (
    <SvgStyled
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill={colorFill}
      onClick={handleClick}
    >
      <path
        d="M8.57025 16.305L8.56953 16.3043C6.08081 14.0093 4.05522 12.1404 2.64581 10.388C1.24237 8.64307 0.5 7.07308 0.5 5.38434C0.5 2.63729 2.61363 0.5 5.29452 0.5C6.81495 0.5 8.28446 1.22227 9.24305 2.36705L9.6264 2.82486L10.0098 2.36705C10.9683 1.22227 12.4378 0.5 13.9583 0.5C16.6392 0.5 18.7528 2.63729 18.7528 5.38434C18.7528 7.07309 18.0104 8.6431 16.6069 10.3894C15.1995 12.1404 13.178 14.0086 10.6945 16.3037L10.6839 16.3135L10.6829 16.3145L9.62769 17.2839L8.57025 16.305Z"
        stroke={strokeColor}
      />
    </SvgStyled>
  );
};
export default FavoriteIcon;