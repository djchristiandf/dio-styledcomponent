import { MdEmail, MdLock, MdSupervisedUserCircle } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import * as yup from "yup";


import { Column, Container, Directs, LoginText, Row, SubTitleSignUp, Title, TitleSignUp, Wrapper } from './styles';

const schema = yup.object({
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Digite um email valido').required('Campo Obrigatório'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo Obrigatório'),
}).required()

const SignIn = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?name=${formData.name}&email=${formData.email}&senha=${formData.senha}`);

            if (data.length && data[0].id) {
                navigate('/feed')
                return
            }

            alert('Usuário ou senha inválido')
        } catch (e) {
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleSignUp>Comece agora grátis</TitleSignUp>
                    <SubTitleSignUp>Cria sua conta e make the change._</SubTitleSignUp>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Name" leftIcon={<MdSupervisedUserCircle />} name="name" control={control} />
                        {errors.name && <span>Nome é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <Directs>
                            Ao clicar em "criar minha conta grátis",
                            declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </Directs>
                    </Row>
                    <Row>                        
                        <LoginText>Já tenho conta. <a href="/login">Fazer login</a></LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignIn };

