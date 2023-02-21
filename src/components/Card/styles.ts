import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
  width: 21.5rem;

  background-color: ${(props) => props.theme.white};

  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ImgContainer = styled.div`
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  object-fit: cover;
`

export const Img = styled.img`
  width: 100%;
`

export const Content = styled.div`
  padding: 1rem;
`

export const Title = styled.strong`
  color: ${(props) => props.theme['zinc-800']};

  font-size: 1.5rem;
`

export const ButtonContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
