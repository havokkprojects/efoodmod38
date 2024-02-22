import { useDispatch } from 'react-redux'

import close from '../../assets/images/close.svg'
import { ModalState } from '../FoodsList'
import { formatPrice } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import { Button } from '../../styles'
import * as S from './styles'

type Props = {
  modal: ModalState
  closeModal: () => void
}

const Modal = ({ modal, closeModal }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(modal))
    dispatch(open())
    closeModal()
  }

  return (
    <S.ModalContainer className={modal.isVisible ? 'visivel' : ''}>
      <S.ModalContent className="container">
        <S.FoodImg src={modal.foto} alt={modal.nome} />
        <S.ModalText>
          <h4>{modal.nome}</h4>
          <p>{modal.descricao}</p>
          <p>Serve: {modal.porcao}</p>
          <Button onClick={addToCart}>
            Adicionar ao carrinho - {formatPrice(modal.preco)}{' '}
          </Button>
        </S.ModalText>
        <S.Icon src={close} alt="Fechar" onClick={() => closeModal()} />
      </S.ModalContent>
      <div className="overlay" onClick={() => closeModal()}></div>
    </S.ModalContainer>
  )
}

export default Modal
