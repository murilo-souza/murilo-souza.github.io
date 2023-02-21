import { HeaderContainer, LogoArea, Navigation } from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <LogoArea to="/">
        <img src={Logo} alt="" />
        <h1>
          Murilo <span>Souza</span>
        </h1>
      </LogoArea>

      <Navigation>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </Navigation>
    </HeaderContainer>
  )
}
