import { useNavigate  } from "react-router-dom";
import {MdEmail, MdLock} from 'react-icons/md';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { Button } from '../../components/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/feed')
  }
  return (<>
    <Header />
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com os experts, dominar as principais technologias
          e entrar mais rapido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
          <form>
            <Input placeholder='E-mail' type='email'leftIcon={<MdEmail/>}/>
            <Input placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
            <Button title='Entrar' variant='secondary' />
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText>Criar conta</CriarText>
          </Row>
        </Wrapper>      
      </Column>
    </Container>

  </>)
}

export { Login }