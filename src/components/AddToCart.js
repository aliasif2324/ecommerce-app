import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()
  const { id } = product
  const amount = 1

  return (
    <Wrapper>
      <div className='btn-container'>
        <Link
          to='/cart'
          className='btn'
          onClick={() => addToCart(id, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
