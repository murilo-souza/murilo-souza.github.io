import { gql, useQuery } from '@apollo/client'
import { Card } from '../../components/Card'
import { Loading } from '../../components/Loading'
import { Container, LoadingContainer } from './styles'

const GET_CARDS_QUERY = gql`
  query MyQuery {
    cards(first: 100) {
      bannerUrl
      id
      title
      testUrl
      repoUrl
    }
  }
`

interface CardProps {
  id: string
  bannerUrl: string
  title: string
  repoUrl: string
  testUrl: string | null
}

export function Projects() {
  const { data } = useQuery<{ cards: CardProps[] }>(GET_CARDS_QUERY, {
    fetchPolicy: 'cache-and-network',
  })

  console.log(data)

  return (
    <>
      {!data ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <Container>
          {data?.cards.map((card) => (
            <Card
              key={card.id}
              bannerUrl={card.bannerUrl}
              title={card.title}
              repoUrl={card.repoUrl}
              testUrl={card.testUrl}
            />
          ))}
        </Container>
      )}
    </>
  )
}
