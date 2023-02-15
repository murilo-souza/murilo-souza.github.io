import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 2rem;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme['zinc-700']};
`

export const BannerArea = styled.div`
  height: 235px;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 100%;
  }
`

export const UserArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 2.25rem;
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled.div`
  margin-top: -200px;
  width: 16rem;
  height: 16rem;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 16rem;
    height: 16rem;
  }
`

export const AboutMe = styled.div`
  margin-top: 1rem;

  h2 {
    font-size: 2rem;

    span {
      color: ${(props) => props.theme['cyan-300']};
    }
  }

  p {
    margin-top: 0.5rem;
    width: 26rem;
    text-align: justify;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const DevInfo = styled.div`
  margin-top: -250px;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;
  /* position: absolute;
  top: 30%;
  left: 63%; */
`

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

export const PersonalInfo = styled.div`
  margin-top: 11rem;

  display: flex;
  flex-direction: column;

  h5 {
    margin-top: 1rem;
    font-size: 1rem;
  }
`
