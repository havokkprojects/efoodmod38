import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  height: 18.5rem;
  background-color: ${colors.salmon};
  padding: 2.5rem 0;
`
export const FooterText = styled.div`
  text-align: center;
  color: ${colors.pink};
  font-size: 0.7rem;
`
export const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding-bottom: 5rem;
`
export const Logo = styled.img`
  padding-bottom: 2rem;
`
export const Text = styled.p`
  margin: 0 auto;
  width: 30rem;
`
