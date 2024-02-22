import styled from 'styled-components'
import header from '../../assets/images/header.png'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 11.75rem;
  background-image: url(${header});
  width: 100%;
  color: ${colors.pink};
  font-weight: 700;
  font-size: 1.1rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    color: ${colors.pink};
  }

  p {
    cursor: pointer;

    &:hover {
      color: ${colors.lightPink};
    }
  }
`
