import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { LabelStyled } from "./SwitchButtonStyled";

interface SwitchButtonProps {
  onChange: () => void;
  isOn: boolean;
}



const SwitchButton = ({ onChange, isOn }: SwitchButtonProps) => {
  const { name, colors } = useContext(ThemeContext);
  return (
    <LabelStyled>
      <input type={"checkbox"} onChange={onChange} checked={name === "dark"} />
      <span></span>
    </LabelStyled>
  );
};

export default SwitchButton;
