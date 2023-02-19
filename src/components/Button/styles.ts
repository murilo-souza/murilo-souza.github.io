import styled, { css } from 'styled-components'

interface BackgroundProps {
  variant: 'repo' | 'test'
}

export const ButtonContainer = styled.button<BackgroundProps>`
  ${({ variant }) =>
    variant === 'repo' &&
    css`
      background-color: ${(props) => props.theme.github};

      :hover {
        transition: background-color 0.2s;
        background-color: #292929;
      }
    `}

  ${({ variant }) =>
    variant === 'test' &&
    css`
      background-color: ${(props) => props.theme['cyan-500']};
      :hover {
        transition: background-color 0.2s;
        background-color: ${(props) => props.theme['cyan-300']};
      }
    `}

  padding: 0.5rem;

  width: 9.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  border: 0;
  border-radius: 5px;

  cursor: pointer;
`

export const Title = styled.h3`
  color: ${(props) => props.theme.white};

  font-size: 1rem;
  font-weight: bold;
`
