import React from 'react'
import styled from 'styled-components'

const CartColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: 776px) {
    .content {
      display: grid;
      grid-template-columns: 316px 0.8fr 0.8fr 0.8fr auto;
      justify-items: left;

    }
  }
`

export default CartColumns
