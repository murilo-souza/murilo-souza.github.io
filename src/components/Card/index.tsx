import {
  ButtonContainer,
  Container,
  Content,
  Img,
  ImgContainer,
  Title,
} from './styles'
import { Button } from '../Button'
import { GithubLogo, Lightning } from 'phosphor-react'

interface Props {
  bannerUrl: string
  title: string
  repoUrl: string
  testUrl: string | null
}

export function Card({ bannerUrl, title, repoUrl, testUrl }: Props) {
  return (
    <Container>
      <ImgContainer>
        <Img src={bannerUrl} />
      </ImgContainer>
      <Content>
        <Title>{title}</Title>
        <ButtonContainer>
          <Button
            icon={GithubLogo}
            title="Repositório"
            variant="repo"
            redirect={repoUrl}
          />
          {testUrl ? (
            <Button
              icon={Lightning}
              title="Testar"
              variant="test"
              redirect={testUrl}
            />
          ) : (
            <></>
          )}
        </ButtonContainer>
      </Content>
    </Container>
  )
}
