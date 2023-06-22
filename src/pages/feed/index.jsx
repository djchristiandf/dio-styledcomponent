import { Header } from '../../components/Header';
import BannerImage from '../../assets/banner-dio-net.png';

import { Container, Column, Title, TitleHighlight } from './styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


const Feed = () => {
  return (<>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
        <UserInfo nome="Christian S Barbosa" image="https://avatars.githubusercontent.com/u/32348713?s=400&u=ad6650b4e3171ebfb9277953d9c2d5b49305fa7d&v=4" percentual={25} />
        <UserInfo nome="Christian S Barbosa" image="https://avatars.githubusercontent.com/u/32348713?s=400&u=ad6650b4e3171ebfb9277953d9c2d5b49305fa7d&v=4" percentual={65} />
        <UserInfo nome="Christian S Barbosa" image="https://avatars.githubusercontent.com/u/32348713?s=400&u=ad6650b4e3171ebfb9277953d9c2d5b49305fa7d&v=4" percentual={45} />
        <UserInfo nome="Christian S Barbosa" image="https://avatars.githubusercontent.com/u/32348713?s=400&u=ad6650b4e3171ebfb9277953d9c2d5b49305fa7d&v=4" percentual={72} />
      </Column>
    </Container>

  </>)
}

export { Feed }