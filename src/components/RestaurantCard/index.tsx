import { Link } from 'react-router-dom'

import star from '../../assets/images/star.svg'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const RestaurantCard = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <S.RestaurantContainer>
    <S.ImageContainer>
      <img src={capa} alt="Restaurante" />
    </S.ImageContainer>
    <S.Infos>
      {destacado ? <Tag>Destaque da semana</Tag> : ''}
      <Tag>{tipo}</Tag>
    </S.Infos>
    <S.TextContainer>
      <S.TitleContainer>
        <S.Title>{titulo}</S.Title>
        <div>
          <S.Title as="p">{avaliacao}</S.Title>
          <img src={star} alt="star" />
        </div>
      </S.TitleContainer>
      <S.Text>{descricao}</S.Text>
      <S.Button>
        <Link to={`/restaurante/${id}`}> Saiba mais</Link>
      </S.Button>
    </S.TextContainer>
  </S.RestaurantContainer>
)

export default RestaurantCard
