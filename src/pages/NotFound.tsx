import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input } from '../components'
import { fontSize, lineHeight } from '../styles/theme'

const DivStyled = styled.div`
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const PanelStyled = styled.div`
  width: 510px;
  height: 169px;
  background: ${props => props.theme.colors.boxBackground};
  box-shadow: ${props => props.theme.colors.boxShadow};
  backdrop-filter: blur(20px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h4 {
    color: ${props => props.theme.colors.primary};
    font-size: ${fontSize['heading4']};
    font-style: normal;
    font-weight: 600;
    height: 39px;
    line-height: ${lineHeight['heading4']};
    width: 465px;
    margin-top: 20px;
  }

  & > button {
    margin-top: 40px;
  }
`

const NotFound = () => (
  <DivStyled>
    <PanelStyled>
      <h4>Ops, essa página não foi encontrada!</h4>
      <Button
        onClick={() => console.log('onclick')}
        text={'Ir para a home'}
        disabled={false}
      />
    </PanelStyled>
  </DivStyled>
)

export default NotFound
