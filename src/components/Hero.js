import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          my shop
        </h1>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  
  h1 {
    font-size: 5rem;
  }
`

export default Hero
