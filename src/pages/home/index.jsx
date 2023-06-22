
import { Header } from '../../components/Header';
import BannerImage from '../../assets/banner-dio-net.png';

import { Container, TextContent, Title, TitleHighLight } from './styles';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }
  return (<>
    <Header />
    <Container>
      <div>
        <Title>
          <TitleHighLight>
            Implemente
            <br />
          </TitleHighLight>
          O seu futuro global agora
        </Title>
        <TextContent>
          Domine as technologias mais utilizadas pelas empresas mais
          inovadoras do mundo e encare seu novo desafio profissional,
          evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
      </div>
      <div>
        <img src={BannerImage} alt="imagem principal" />
      </div>
    </Container>

  </>)
}

export { Home }