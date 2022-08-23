import api from '../Services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input } from '../components'
import { fontSize, lineHeight } from '../styles/theme'
import { url } from 'inspector'

const PanelStyled = styled.div`
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
const ButtonDiv = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

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

const InsideForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > input {
    height: 40px;
    margin-top: 30px;
  }
`

const Signin = () => {
  const [form, setForm] = useState<{
    nome: string
    email: string
    senha: string
    confirma: string
    codigoAcesso: string
  }>({
    nome: '',
    email: '',
    senha: '',
    confirma: '',
    codigoAcesso: ''
  })

  const onSave = (e: any) => {
    e.preventDefault()
    api
      .post('/auth/cadastrar', form)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  return (
    <PanelStyled>
      <h4>Bem Vindo!</h4>
      <InsideForm>
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, nome: val })}
          placeholder="Nome"
          width="450px"
          value={form.nome}
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, email: val })}
          placeholder="Email"
          width="450px"
          value={form.email}
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, senha: val })}
          placeholder="Senha"
          type="password"
          value={form.senha}
          width="450px"
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, confirma: val })}
          placeholder="Confirmar senha"
          type="password"
          value={form.confirma}
          width="450px"
        />
        <Input
          height="40px"
          onChange={(val: string) => setForm({ ...form, codigoAcesso: val })}
          placeholder="Código de acesso"
          value={form.codigoAcesso}
          width="450px"
        />
        <ButtonDiv>
          <Link to="/">Já possui uma conta? Faça o login!</Link>
          <Button
            onClick={(e: any) => onSave(e)}
            text={'Cadastrar'}
            disabled={false}
          />
        </ButtonDiv>
      </InsideForm>
    </PanelStyled>
  )
}
export default Signin
