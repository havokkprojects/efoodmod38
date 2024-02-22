import { useState } from 'react'

import FoodCard from '../FoodCard'
import Modal from '../Modal'

import { FoodsListContainer, FoodsListItems } from './styles'

type Props = {
  products: Food[]
}

export interface ModalState extends Food {
  isVisible: boolean
}

const FoodsList = ({ products }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    id: 0,
    nome: '',
    preco: 0,
    porcao: '',
    descricao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      id: 0,
      nome: '',
      preco: 0,
      porcao: '',
      descricao: ''
    })
  }

  return (
    <>
      <FoodsListContainer>
        <div className="container">
          <FoodsListItems>
            {products.map((pro) => (
              <FoodCard
                key={pro.id}
                name={pro.nome}
                image={pro.foto}
                description={pro.descricao}
                id={pro.id}
                products={products}
                setModal={setModal}
              />
            ))}
          </FoodsListItems>
        </div>
      </FoodsListContainer>
      <Modal modal={modal} closeModal={closeModal} />
    </>
  )
}

export default FoodsList
