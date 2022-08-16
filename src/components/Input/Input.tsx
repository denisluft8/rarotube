import styled from 'styled-components'
import { colors, fontSize, lineHeight } from '../../styles/theme'

interface InputProps {
  height: string
  onBlur: () => void
  onChange: () => void
  placeholder: string
  width: string
  type?: string
}

const InputStyled = styled.input<InputProps>`
  background: ${props => props.theme.colors.background};
  box-shadow: inset 3px 3px 10px rgba(0, 0, 0, 0.2),
    inset -1px -1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  height: ${props => props.height};
  width: ${props => props.width};
  padding-left: 10px;
  color: ${props => props.theme.colors.primary};
  border: none;

  &::placeholder {
    color: ${props => props.theme.colors.placeholder};
    font-size: 16px;
    font-weight: ${fontSize['body']};
    line-height: ${lineHeight['body']};
  }
`

const Input = ({
  height,
  onBlur,
  onChange,
  placeholder,
  type,
  width
}: InputProps) => (
  <InputStyled
    height={height}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    width={width}
  ></InputStyled>
)

export default Input
