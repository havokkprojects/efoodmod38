import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { formatPrice } from '../../utils'
import { clear } from '../../store/reducers/cart'

import { Button, Title } from '../../styles'
import { InputGroup, Row, Text } from './styles'

type Props = {
  handleBackToCart: () => void
}

const CartCheckout = ({ handleBackToCart }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const [payment, setPayment] = useState(false)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardFullName: '',
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string(),
      address: Yup.string(),
      city: Yup.string(),
      cep: Yup.string(),
      number: Yup.string(),
      cardFullName: Yup.string(),
      cardNumber: Yup.string(),
      cvv: Yup.string(),
      expirationMonth: Yup.string(),
      expirationYear: Yup.string()
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardFullName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear)
            }
          }
        }
      })
    }
  })

  const finalPrice = () => {
    const prices = items.map((item) => item.preco)
    const price = prices.reduce((acc, currentPrice) => {
      return (acc += currentPrice)
    }, 0)
    return formatPrice(price)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const handleSetPayment = () => {
    const name = checkInputHasError('fullName')
    const address = checkInputHasError('address')
    const city = checkInputHasError('city')
    const cep = checkInputHasError('cep')
    const number = checkInputHasError('number')

    if (!name && !address && !city && !cep && !number) {
      return setPayment(true)
    } else return setPayment(false)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  return (
    <>
      {isSuccess && data ? (
        <>
          <Title className="margin-bottom">
            Pedido realizado - {data.orderId}
          </Title>
          <Text>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </Text>
          <Text>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </Text>
          <Text>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </Text>
          <Text>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </Text>
        </>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {payment ? (
            <>
              <Title className="margin-bottom">
                <>Pagamento - Valor a pagar {finalPrice()}</>
              </Title>
              <Row>
                <InputGroup>
                  <label htmlFor="cardFullName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardFullName"
                    name="cardFullName"
                    value={form.values.cardFullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('cardFullName') ? 'error' : ''
                    }
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </InputGroup>
                <InputGroup maxWidth="5.5rem">
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cvv') ? 'error' : ''}
                    mask="999"
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="expirationMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expirationMonth"
                    name="expirationMonth"
                    value={form.values.expirationMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expirationMonth')
                        ? 'error last-child'
                        : 'last-child'
                    }
                    mask="99"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expirationYear">Ano de vencimento</label>
                  <InputMask
                    className={
                      checkInputHasError('expirationMonth')
                        ? 'error last-child'
                        : 'last-child'
                    }
                    type="text"
                    id="expirationYear"
                    name="expirationYear"
                    value={form.values.expirationYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="9999"
                  />
                </InputGroup>
              </Row>
              <Button className="margin-bottom" type="submit">
                Finalizar pagamento
              </Button>
              <Button onClick={() => setPayment(false)}>
                Voltar para a edição de endereço
              </Button>{' '}
            </>
          ) : (
            <>
              <Title className="margin-bottom">Entrega</Title>
              <Row>
                <InputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="99999-999"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('complement')
                        ? 'error last-child'
                        : 'last-child'
                    }
                  />
                </InputGroup>
              </Row>
              <Button className="margin-bottom" onClick={handleSetPayment}>
                Continuar com o pagamento
              </Button>
              <Button onClick={handleBackToCart}>Voltar para o carrinho</Button>
            </>
          )}
        </form>
      )}
    </>
  )
}

export default CartCheckout
