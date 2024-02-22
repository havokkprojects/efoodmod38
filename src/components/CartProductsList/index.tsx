import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

import { Button } from '../../styles'
import { CartItem, EmptyCart, Price } from './styles'

type Props = {
  handleGoToDelivery: () => void
}

const CartProductsList = ({ handleGoToDelivery }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acc, currentPrice) => {
      return (acc += currentPrice.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <CartItem key={Math.random()}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formatPrice(item.preco)}</p>
                </div>
                <button onClick={() => removeItem(item.id)} />
              </CartItem>
            ))}
          </ul>
          <Price>
            <p>Valor total</p>
            <p>{formatPrice(getTotalPrice())}</p>
          </Price>
          <Button onClick={handleGoToDelivery}>Continuar com a entrega</Button>
        </>
      ) : (
        <EmptyCart>
          O carrinho está vazio, adicione pelo menos um produto para continuar
          com a compra
        </EmptyCart>
      )}
    </>
  )
}

export default CartProductsList
