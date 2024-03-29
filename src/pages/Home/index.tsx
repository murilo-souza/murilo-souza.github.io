import {
  AboutMe,
  Avatar,
  BannerArea,
  Container,
  DevInfo,
  LeftContent,
  PersonalInfo,
  RightContent,
  SocialMediaContainer,
  SocialMedias,
  UserArea,
} from './styles'
import { SocialMediaButton } from '../../components/SocialMediaButtom'
import { LinkedinLogo, GithubLogo, InstagramLogo } from 'phosphor-react'
import { theme } from '../../styles/themes/default'
import { gql, useQuery } from '@apollo/client'
import { Loading } from '../../components/Loading'

const GET_MY_INFO_QUERY = gql`
  query MyQuery {
    information(where: { id: "cleanvw285uj00blrgj4dcli7" }) {
      age
      avatarUrl
      eMail
      freelancer
      me
      phone
      profession
      backgroundUrl
    }
  }
`

interface Props {
  age: string
  avatarUrl: string
  eMail: string
  freelancer: boolean
  me: string
  phone: string
  profession: string
  backgroundUrl: string
}

export function Home() {
  const { data } = useQuery<{ information: Props }>(GET_MY_INFO_QUERY, {
    fetchPolicy: 'cache-and-network',
  })

  console.log(data?.information)
  return (
    <Container>
      {!data ? (
        <Loading />
      ) : (
        <>
          <BannerArea>
            <img src={data?.information.backgroundUrl} alt="" />
          </BannerArea>
          <UserArea>
            <LeftContent>
              <Avatar>
                <img src={data?.information.avatarUrl} alt="" />
              </Avatar>
              <AboutMe>
                <h2>
                  Quem <span>sou?</span>
                </h2>
                <p>{data?.information.me}</p>
              </AboutMe>
            </LeftContent>

            <RightContent>
              <DevInfo>
                <h1>Murilo Leme de Souza</h1>
                <h3>{data?.information.profession}</h3>
                <SocialMedias>
                  <SocialMediaButton link="https://www.linkedin.com/in/murilo-leme-de-souza/">
                    <LinkedinLogo size={30} color={theme['gray-400']} />
                  </SocialMediaButton>
                  <SocialMediaButton link="https://github.com/murilo-souza/murilo-souza.github.io">
                    <GithubLogo size={30} color={theme['gray-400']} />
                  </SocialMediaButton>
                  <SocialMediaButton link="https://www.instagram.com/murilo_souza544/">
                    <InstagramLogo size={30} color={theme['gray-400']} />
                  </SocialMediaButton>
                </SocialMedias>
              </DevInfo>

              <SocialMediaContainer>
                <SocialMedias>
                  <SocialMediaButton link="https://www.linkedin.com/in/murilo-leme-de-souza/">
                    <LinkedinLogo size={30} color={theme['gray-400']} />
                  </SocialMediaButton>
                  <SocialMediaButton link="https://github.com/murilo-souza">
                    <GithubLogo size={30} color={theme['gray-400']} />
                  </SocialMediaButton>
                  <SocialMediaButton link="https://www.instagram.com/murilo_souza544/">
                    <InstagramLogo size={30} color={theme['gray-400']} />
                  </SocialMediaButton>
                </SocialMedias>
              </SocialMediaContainer>

              <PersonalInfo>
                <h5>
                  Idade: <span>{data?.information.age}</span>
                </h5>
                <h5>
                  Email: <span>{data?.information.eMail}</span>
                </h5>
                <h5>
                  Fone: <span>{data?.information.phone}</span>
                </h5>
                <h5>
                  Freelancer:{' '}
                  <span>
                    {data?.information.freelancer
                      ? 'Disponível'
                      : 'Indisponível'}
                  </span>
                </h5>
              </PersonalInfo>
            </RightContent>
          </UserArea>
        </>
      )}
    </Container>
  )
}
