import { IconProps } from 'phosphor-react'
import { ElementType } from 'react'
import { useTheme } from 'styled-components'
import { ButtonContainer, Title } from './styles'

interface Props {
  title: string
  icon: ElementType<IconProps>
  variant: 'repo' | 'test'
  redirect: string
}

export function Button({ title, icon: Icon, variant, redirect }: Props) {
  const theme = useTheme()

  return (
    <ButtonContainer variant={variant} href={redirect}>
      <Icon size={20} color={theme.white} />
      <Title>{title}</Title>
    </ButtonContainer>
  )
}
