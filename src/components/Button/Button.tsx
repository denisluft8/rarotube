import styled from 'styled-components'
import { colors } from '../../styles/theme'

interface ButtonProps {
  text: string
  onClick: () => void
  color?: string
}
const ButtonStyled = styled.button`
  border: 1px solid red;
  height: 30px;
  background-color: ${props => props.color};
  &:hover {
    background-color: red;
  }
  &:focus {
    background-color: blue;
  }
  color: ${colors['blue-maximum']};
`

const Button = ({ onClick, text, color }: ButtonProps) => (
  <ButtonStyled color={color} onClick={onClick}>
    {text}
  </ButtonStyled>
)

export default Button
