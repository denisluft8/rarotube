import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input, Panel } from '../components/'
import api from '../Services/api'
import { colors, fontSize, lineHeight } from '../styles/theme'

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
const Login = () => {
  const [form, setForm] = useState<{
    email: string
    senha: string
  }>({
    email: '',
    senha: ''
  })

  const onLog = (e: any) => {
    e.preventDefault()
    api
      .post('/auth/login', form)
      .then(res => localStorage.setItem('token', res.data.access_token))
      .catch(error => console.log(error))
  }
  return (
    <PanelStyled>
      <h4>Bem Vindo!</h4>
      <InsideDiv>
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, email: val })}
          placeholder="Email"
          value={form.email}
          width="450px"
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, senha: val })}
          placeholder="Senha"
          type="password"
          value={form.senha}
          width="450px"
        />
        <Link to="/changepassword"> Esqueci minha senha</Link>
        <ButtonDiv>
          <Link to="/signin">Não possui uma conta? Faça seu cadastro!</Link>
          <Button
            onClick={(e: any) => onLog(e)}
            text={'Entrar'}
            disabled={false}
          />
        </ButtonDiv>
      </InsideDiv>
    </PanelStyled>
  )
}
export default Login
