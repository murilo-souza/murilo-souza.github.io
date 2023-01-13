import {
  AboutMe,
  Avatar,
  BannerArea,
  Container,
  DevInfo,
  LeftContent,
  RightContent,
  SocialMedias,
  UserArea,
} from './styles'
import Banner from '../../assets/Banner.png'
import { SocialMediaButtom } from '../../components/SocialMediaButtom'
import { LinkedinLogo, GithubLogo, InstagramLogo } from 'phosphor-react'
import { theme } from '../../styles/themes/default'

export function Home() {
  return (
    <Container>
      <BannerArea>
        <img src={Banner} alt="" />
      </BannerArea>
      <UserArea>
        <LeftContent>
          <Avatar>
            <img src="https://github.com/murilo-souza.png" alt="" />
          </Avatar>
          <AboutMe>
            <h2>
              Quem <span>sou?</span>
            </h2>
            <p>
              Ola usuário! Eu sou Murilo, desenvolvedor Front-end com foco nas
              tecnologias React Js, React Native e Next Js. Seja bem vindo,
              espero que encontre boas informações aqui
            </p>
          </AboutMe>
        </LeftContent>

        <RightContent>
          <DevInfo>
            <h1>Murilo Leme de Souza</h1>
            <h3>Desenvolvedor Front-end</h3>
            <SocialMedias>
              <SocialMediaButtom link="https://github.com/murilo-souza">
                <LinkedinLogo size={30} color={theme['gray-400']} />
              </SocialMediaButtom>
              <SocialMediaButtom link="https://github.com/murilo-souza">
                <GithubLogo size={30} color={theme['gray-400']} />
              </SocialMediaButtom>
              <SocialMediaButtom link="https://github.com/murilo-souza">
                <InstagramLogo size={30} color={theme['gray-400']} />
              </SocialMediaButtom>
            </SocialMedias>
          </DevInfo>
        </RightContent>
      </UserArea>
    </Container>
  )
}
