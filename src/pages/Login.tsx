import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input, Panel } from '../components/'
import { colors, fontSize, lineHeight } from '../styles/theme'
const DivStyled = styled.div`
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const PanelStyled = styled.div`
  width: 510px;
  height: 409px;
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

const InsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a {
    color: ${props => props.theme.colors.secondary};
    font-family: 'Plus Jakarta Sans';
    font-size: ${fontSize['body-small']};
    font-style: normal;
    font-weight: 500;
    height: 20px;
    line-height: ${lineHeight['body-small']};
    align-self: flex-start;
    margin-top: 10px;
    margin-left: 33px;
  }

  & > input {
    height: 40px;
    margin-top: 30px;
  }
`

const ButtonDiv = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;

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
const Login = () => (
  <DivStyled>
    <PanelStyled>
      <h4>Bem Vindo!</h4>
      <InsideDiv>
        <Input
          height="40px"
          onBlur={() => console.log('onBlur')}
          onChange={() => console.log('onChange')}
          placeholder="Email"
          width="450px"
        />
        <Input
          height="40px"
          onBlur={() => console.log('onBlur')}
          onChange={() => console.log('onChange')}
          placeholder="Senha"
          type="password"
          width="450px"
        />
        <Link to="/changepassword"> Esqueci minha senha</Link>
        <ButtonDiv>
          <Link to="/signin">Não possui uma conta? Faça seu cadastro!</Link>
          <Button
            onClick={() => console.log('onclick')}
            text={'Entrar'}
            disabled={false}
          />
        </ButtonDiv>
      </InsideDiv>
    </PanelStyled>
  </DivStyled>
)

export default Login
