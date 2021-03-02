import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'

const Nav = () => {

  const { myUser } = useUserContext()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'></div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media (min-width: 992px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto auto auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
     
      a {
        font-size: 1rem;
        letter-spacing: var(--spacing);
        padding: 1rem;
        }
      }

  }
`

export default Nav
