import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { CartContent} from '../components'

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>

      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`

export default CartPage
