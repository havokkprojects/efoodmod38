import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Row = styled.div`
  display: flex;
  column-gap: 1.5rem;
  margin-top: 0.5rem;
  align-items: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 1rem;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    color: ${colors.salmon};
    font-size: 0.87rem;
    line-height: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  input {
    background-color: ${colors.salmon};
    height: 2rem;
    padding: 0 8px;
    border: 1px solid ${colors.salmon};
    width: 100%;

    &.last-child {
      margin-bottom: 1.5rem;
    }

    &.error {
      border: 2px solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 1rem;
  }
`
export const Text = styled.p`
  font-size: 0.87rem;
  line-height: 1.3rem;
  color: ${colors.salmon};
  margin-bottom: 1rem;
`
