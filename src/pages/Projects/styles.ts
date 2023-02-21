import styled from 'styled-components'

export const Container = styled.main`
  display: grid;

  grid-template-columns: auto auto auto;

  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`

export const LoadingContainer = styled.div`
  margin-top: 2rem;
`
