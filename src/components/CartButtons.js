import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn'>
        Cart
  
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            clearCart()
            localStorage.removeItem('user')
            logout({ returnTo: window.location.origin })
          }}
        >
          Logout 
      </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
