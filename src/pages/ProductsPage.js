import React from 'react'
import styled from 'styled-components'
import { ProductList } from '../components'

const ProductsPage = () => {
  return (
    <main>

      <Wrapper className='page'>
        <div className='section-center products'>
          <div>
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

`

export default ProductsPage
