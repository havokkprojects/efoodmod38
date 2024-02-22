import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

import { FooterContainer, FooterText, Icons, Logo, Text } from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterText>
        <Link to="/">
          <Logo src={logo} alt="Efood" />
        </Link>
        <Icons>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </Icons>
        <Text>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </Text>
      </FooterText>
    </div>
  </FooterContainer>
)

export default Footer
