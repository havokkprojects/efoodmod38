import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import { HeaderContainer, Title } from './styles'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderContainer>
)

export default Header
