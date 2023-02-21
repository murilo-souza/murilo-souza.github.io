import styled from 'styled-components'

export const Container = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 99999px;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.white};

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`
