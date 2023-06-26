import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email('email is not valid').required(),
    password: yup.string().min(3, 'last 3 chars').required(),
  })
  .required()

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({resolver: yupResolver(schema)});

  console.log(isValid, errors);

  const onSubmit = (data) => console.log(data)

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" control={control} placeholder='E-mail' type='email'leftIcon={<MdEmail/>}/>
            <Input name="password" control={control} placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
            <Button title='Entrar' variant='secondary' type="submit"/>
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

export { Login };

