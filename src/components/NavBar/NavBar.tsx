import Vote from "../Icons/Vote";
import avatar from "../../assets/avatar.svg";
import SwitchButton from "../SwitchButton/SwitchButton";
import { DropDown, DropDownMenu, NavBarStyled } from "./NavBarStyled";

interface NavBarProps {
  onChangeTheme: () => void;
  isOn: boolean;
}

const NavBar = ({ onChangeTheme, isOn }: NavBarProps) => {
  return (
    <>
      <NavBarStyled>
        <img src={avatar}></img>
        <DropDown> {/* dropdown */}
          <button>
            <Vote />
          </button>
          <DropDownMenu> {/* dropdown-content #myDropDown */}
            <SwitchButton onChange={onChangeTheme} isOn={isOn} />
          </DropDownMenu>
        </DropDown>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
