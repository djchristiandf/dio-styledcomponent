import React from 'react'
import { Button } from '../Button';
import logo  from '../../assets/logo.png';

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  UserPicture,
  Row,
  Wrapper
} from './styles';

const Header = ({autenticado}) => {
  return(
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" width="10%" height="10%"/>
          {autenticado ? (
              <>
          <BuscarInputContainer>
            <Input placeholder="Buscar ..."/>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
          </>
            ) : null}
        </Row>
        <Row>
          {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/32348713?s=400&u=ad6650b4e3171ebfb9277953d9c2d5b49305fa7d&v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
