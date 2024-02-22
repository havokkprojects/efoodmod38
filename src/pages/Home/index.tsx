import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantObj[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
