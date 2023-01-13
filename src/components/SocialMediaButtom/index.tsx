import { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  link: string
  children: ReactNode
}

export function SocialMediaButtom({ children, link }: Props) {
  return <Container href={link}>{children}</Container>
}
