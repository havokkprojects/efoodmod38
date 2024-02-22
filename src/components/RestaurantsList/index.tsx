import RestaurantCard from '../RestaurantCard'

import { ListContainer, RestaurantsContainer } from './styles'

type Props = {
  restaurants: RestaurantObj[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantsContainer>
    <div className="container">
      <ListContainer>
        {restaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            id={res.id}
            titulo={res.titulo}
            capa={res.capa}
            avaliacao={res.avaliacao}
            descricao={res.descricao}
            destacado={res.destacado}
            tipo={res.tipo}
          />
        ))}
      </ListContainer>
    </div>
  </RestaurantsContainer>
)

export default RestaurantsList
