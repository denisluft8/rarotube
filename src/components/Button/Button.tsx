import styled from 'styled-components'
import { colors, fontSize, lineHeight } from '../../styles/theme'

interface ButtonProps {
  text: string
  onClick: any
  disabled: boolean
}
const ButtonStyled = styled.button`
  height: 40px;
  width: 150px;
  border: none;
  cursor: pointer;
  background-color: ${colors['pink-sasquatch']};
  border-radius: 10px;
  font-size: ${fontSize['body-small']};
  color: #ffffff;
  font-weight: 700;
  line-height: ${lineHeight['body-small']};
  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
  }
  &:disabled {
    background-color: rgba(245, 72, 127, 0.5);
  }
`

const Button = ({ onClick, text, disabled }: ButtonProps) => (
  <ButtonStyled onClick={onClick} disabled={disabled}>
    {text}
  </ButtonStyled>
)

export default Button
