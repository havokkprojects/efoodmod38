import styled from 'styled-components'
import header from '../../assets/images/header.png'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${header});
  height: 24rem;
  width: 100%;

  img {
    display: block;
    margin: 0 auto;
    padding-top: 4rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 20rem;

    img {
      padding-top: 2rem;
    }
  }
`

export const Title = styled.h1`
  width: 33.75rem;
  text-align: center;
  margin: 0 auto;
  font-weight: 700;
  line-height: 2.5rem;
  font-size: 2.25rem;
  padding-top: 8.5rem;
  color: ${colors.pink};

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 4rem;
    font-size: 2rem;
    max-width: 100%;
  }
`
