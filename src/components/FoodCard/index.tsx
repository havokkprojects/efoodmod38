import { ModalState } from '../FoodsList'

import { FoodCardContainer } from './styles'
import { Button, Title } from '../../styles'

type Props = {
  products: Food[]
  name: string
  image: string
  description: string
  id: number
  setModal: React.Dispatch<React.SetStateAction<ModalState>>
}

const FoodCard = ({
  name,
  image,
  description,
  id,
  products,
  setModal
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 165) {
      return description.slice(0, 165) + '...'
    }
  }

  const getItem = (id: number) => {
    const itemId = products.map((pro) => pro.id)
    const itemIndex = itemId.indexOf(id)
    return itemIndex
  }

  const addCarrinho = () => {
    const productIndex = getItem(id)
    const finalItem = products[productIndex]
    setModal({
      isVisible: true,
      id: finalItem.id,
      foto: finalItem.foto,
      nome: finalItem.nome,
      preco: finalItem.preco,
      porcao: finalItem.porcao,
      descricao: finalItem.descricao
    })
  }

  return (
    <>
      <FoodCardContainer>
        <img src={image} alt={name} />
        <Title>{name}</Title>
        <p>{getDescription(description)}</p>
        <Button onClick={() => addCarrinho()}>Adicionar ao carrinho</Button>
      </FoodCardContainer>
    </>
  )
}

export default FoodCard
