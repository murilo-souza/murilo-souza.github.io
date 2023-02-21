import { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  link: string
  children: ReactNode
}

export function SocialMediaButton({ children, link }: Props) {
  return (
    <Container href={link} target="_blank">
      {children}
    </Container>
  )
}
