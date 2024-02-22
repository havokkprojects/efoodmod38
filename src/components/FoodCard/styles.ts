import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FoodCardContainer = styled.li`
  width: 20rem;
  height: 21rem;
  background-color: ${colors.pink};
  padding: 0.5rem;
  color: ${colors.salmon};

  img {
    width: 19rem;
    height: 10.5rem;
  }

  p {
    font-size: 0.87rem;
    line-height: 1.3rem;
    margin: 0.5rem 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
    }
  }
`
