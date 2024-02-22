import { PropagateLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PropagateLoader color={colors.pink} />
    </Container>
  )
}

export default Loader
