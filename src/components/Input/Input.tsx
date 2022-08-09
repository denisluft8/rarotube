import styled from "styled-components";
import { colors, fontSize, lineHeight } from "../../styles/theme";

interface InputProps {
  height: string;
  onBlur: () => void;
  onChange: () => void;
  placeholder: string;
  width: string;
}

const InputStyled = styled.input<InputProps>`
  background: ${colors["faux-smoky-grey"]};
  box-shadow: inset 3px 3px 10px rgba(0, 0, 0, 0.2),
    inset -1px -1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  &::placeholder {
    color: ${colors["light-silver"]};
    font-size: 16px;
    font-weight: ${fontSize["body"]};
    line-height: ${lineHeight["body"]};
    padding-left: 10px;
  }
`;

const Input = ({
  height,
  onBlur,
  onChange,
  placeholder,
  width,
}: InputProps) => (
  <InputStyled
    height={height}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={placeholder}
    width={width}
  ></InputStyled>
);

export default Input;
