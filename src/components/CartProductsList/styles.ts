import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import garbage from '../../assets/images/lixo.svg'

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.salmon};
  padding-bottom: 0.75rem;
  padding-top: 0.5rem;
  position: relative;
  margin-bottom: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  div {
    color: ${colors.pink};

    h3 {
      font-size: 1.1rem;
      font-weight: bold;
      padding-bottom: 1rem;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 1rem;
      }
    }

    p {
      font-size: 0.85rem;
    }
  }

  button {
    background-image: url(${garbage});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1rem;

  p {
    font-weight: bold;
    font-size: 0.85rem;
    color: ${colors.salmon};
  }
`

export const EmptyCart = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: ${colors.salmon};
`
