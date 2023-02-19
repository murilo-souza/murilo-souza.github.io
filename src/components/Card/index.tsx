import {
  ButtonContainer,
  Container,
  Content,
  Img,
  ImgContainer,
  Title,
} from './styles'
import Capa from '../../assets/Capa.png'
import { Button } from '../Button'
import { GithubLogo, Lightning } from 'phosphor-react'

export function Card() {
  return (
    <Container>
      <ImgContainer>
        <Img src={Capa} />
      </ImgContainer>
      <Content>
        <Title>GitHub Blog</Title>
        <ButtonContainer>
          <Button icon={GithubLogo} title="Repositório" variant="repo" />
          <Button icon={Lightning} title="Testar" variant="test" />
        </ButtonContainer>
      </Content>
    </Container>
  )
}
