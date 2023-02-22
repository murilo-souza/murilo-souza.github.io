import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoArea = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 3rem;
  }

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.white};
  }

  span {
    color: ${(props) => props.theme['cyan-300']};
  }
`

export const Navigation = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    padding-bottom: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-size: 1.25rem;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      color: ${(props) => props.theme['cyan-300']};
      transition: color 0.5s;
    }

    &.active {
      border-bottom: 3px solid ${(props) => props.theme['cyan-300']};
    }
  }
`
