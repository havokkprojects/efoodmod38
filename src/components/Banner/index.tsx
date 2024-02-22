import { BannerContainer } from './styles'

export type Props = {
  name: string
  tipo: string
  image: string
}

const Banner = ({ name, tipo, image }: Props) => (
  <BannerContainer image={image}>
    <p>{tipo}</p>
    <h2>{name}</h2>
  </BannerContainer>
)

export default Banner
