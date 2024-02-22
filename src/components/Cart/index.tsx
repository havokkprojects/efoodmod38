import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import CartProductsList from '../CartProductsList'
import CartDeliveryForm from '../CartCheckout'

import { CartContainer, Overlay, Sidebar } from './styles'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [goToDelivery, setGoToDelivery] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const handleGoToDelivery = () => {
    setGoToDelivery(true)
  }

  const handleBackToCart = () => {
    setGoToDelivery(false)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {!goToDelivery ? (
          <CartProductsList handleGoToDelivery={handleGoToDelivery} />
        ) : (
          <CartDeliveryForm handleBackToCart={handleBackToCart} />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
