import styled from 'styled-components'
import { colors } from '../../styles/theme'
import LogoIcon from '../Icons/LogoIcon'
import SwitchButton from '../SwitchButton/SwitchButton'

interface HeaderProps {
  onChangeTheme: () => void
  isOn: boolean
}

const HeaderStyled = styled.header`
  background: ${colors['blue-cobalt']};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > svg {
    margin-left: 35px;
  }
  & > label {
    margin-right: 35px;
  }
`

const Header = ({ onChangeTheme, isOn }: HeaderProps) => (
  <HeaderStyled>
    <LogoIcon />
    <SwitchButton onChange={onChangeTheme} isOn={isOn} />
  </HeaderStyled>
)

export default Header
