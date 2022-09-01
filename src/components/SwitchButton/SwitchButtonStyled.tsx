import styled from "styled-components";
import { colors } from "../../styles/theme";

export const LabelStyled = styled.label`
  width: 48px;
  height: 24px;
  position: relative;
  display: inline-block;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${colors["pink-sasquatch"]};
    }

    &:focus + span {
      box-shadow: 0 0 1px ${colors["pink-sasquatch"]};
    }

    &:checked + span:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }

  & > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.switchSpan};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 2px;
      bottom: 3px;
      background-color: ${(props) => props.theme.colors.switchButton};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;