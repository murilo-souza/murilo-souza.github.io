import { IconProps } from 'phosphor-react'
import { ElementType } from 'react'
import { useTheme } from 'styled-components'
import { ButtonContainer, Title } from './styles'

interface Props {
  title: string
  icon: ElementType<IconProps>
  variant: 'repo' | 'test'
}

export function Button({ title, icon: Icon, variant }: Props) {
  const theme = useTheme()

  return (
    <ButtonContainer variant={variant}>
      <Icon size={20} color={theme.white} />
      <Title>{title}</Title>
    </ButtonContainer>
  )
}
