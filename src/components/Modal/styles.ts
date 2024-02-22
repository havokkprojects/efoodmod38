import styled from 'styled-components'
import { breakpoints, Button, colors } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  @media (max-width: ${breakpoints.desktop}) {
    align-items: space-between;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  background-color: ${colors.pink};
  display: flex;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 2rem 1rem 1rem 1rem;
  }
`
export const FoodImg = styled.img`
  width: 17.5rem;
  height: 17.5rem;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 0.5rem;
    height: 8rem;
  }
`
export const ModalText = styled.div`
  color: ${colors.branco};
  font-size: 0.87rem;
  margin-left: 1.5rem;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.3rem;
    margin-bottom: 1.25rem;
  }

  ${Button} {
    width: 14rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;

    p {
      line-height: 1.1.rem;
      margin-bottom: 1rem;
    }
  }
`
export const Icon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    top: 0.5rem;
    right: 0.5rem;
  }
`
