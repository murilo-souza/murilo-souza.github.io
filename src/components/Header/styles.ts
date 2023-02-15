import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-right: 10px; */
`

export const LogoArea = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  span {
    color: ${(props) => props.theme['cyan-300']};
  }
`

export const Navigation = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    width: 3rem;
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
