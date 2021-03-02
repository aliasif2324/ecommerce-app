import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'

const CartItem = ({ id, image, name, price, amount }) => {

  return (
    <Wrapper>
      <div className='title'>
        <div>
          <h5 className='name'>{name}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: grid;
  grid-template-rows: 75px;
  gap: 1rem 3rem;
  justify-items: left;
  margin-bottom: 1rem;
 
  @media (min-width: 776px) {
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
 
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
      align-items: center;

      
    }
  }
`

export default CartItem
