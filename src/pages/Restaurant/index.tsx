import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import RestaurantHeader from '../../components/RestaurantHeader'
import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Loader from '../../components/Loader'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantObj>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <RestaurantHeader />
      <Banner
        name={restaurant.titulo}
        tipo={restaurant.tipo}
        image={restaurant.capa}
      />
      <FoodsList products={restaurant.cardapio} />
    </>
  )
}

export default Restaurant
