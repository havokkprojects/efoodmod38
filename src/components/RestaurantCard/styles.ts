import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const RestaurantContainer = styled.li`
  width: 29.5rem;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  width: 29.5rem;
  height: 13.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
`

export const TextContainer = styled.div`
  border: 1px solid ${colors.pink};
  border-top: none;
  margin-top: 0;
  color: ${colors.pink};
  background-color: ${colors.branco};
  padding: 0.5rem;
`

export const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.3rem;
  padding-bottom: 1rem;
`

export const Infos = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
`
export const Button = styled.button`
  display: inline-block;
  background-color: ${colors.pink};
  font-weight: bold;
  padding: 4px 6px;
  border: none;

  &:hover {
    background-color: ${colors.lightPink};
  }

  a {
    text-decoration: none;
    color: ${colors.lightSalmon};
  }
`
