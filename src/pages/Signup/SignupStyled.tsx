import styled from 'styled-components'
import { fontSize, lineHeight } from '../../styles/theme'

export const PanelStyled = styled.div`
  width: 510px;
  height: 554px;
  background: ${props => props.theme.colors.boxBackground};
  box-shadow: ${props => props.theme.colors.boxShadow};
  backdrop-filter: blur(20px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  & > h4 {
    color: ${props => props.theme.colors.primary};
    font-size: ${fontSize['heading4']};
    font-style: normal;
    font-weight: 600;
    height: 39px;
    line-height: ${lineHeight['heading4']};
    width: 150px;
    margin-left: 30px;
    margin-top: 20px;
  }
`
export const ButtonDiv = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  padding-bottom: 10px;

  & > a {
    color: ${props => props.theme.colors.secondary};
    font-family: 'Plus Jakarta Sans';
    font-size: ${fontSize['body-small']};
    font-style: normal;
    font-weight: 500;
    height: 20px;
    line-height: ${lineHeight['body-small']};
    width: 263px;
    margin-right: 28px;
  }
`

export const InsideForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > input {
    height: 40px;
    margin-top: 30px;
  }
`
