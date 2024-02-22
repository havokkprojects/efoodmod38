import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, colors } from '../../styles'

export const BannerContainer = styled.div<Omit<Props, 'name' | 'tipo'>>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 17.5rem;
  color: ${colors.branco};
  padding-left: 10rem;
  font-size: 2rem;
  line-height: 2.25rem;

  p {
    font-weight: 100;
    padding-top: 1.5rem;
  }

  h2 {
    padding-top: 9.75rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 1rem;
    font-size: 1.8rem;

    h2 {
      padding-top: 7.5rem;
    }
  }
`
