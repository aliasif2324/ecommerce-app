import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_data } from '../utils/constants'
import { product_url as url } from '../utils/constants'

import {

  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,

} from '../actions'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

 const fetchProducts = async (url) => {
  // const fetchProducts = async () => {
    console.log('fetchProducts.1');
    dispatch({ type: GET_PRODUCTS_BEGIN })

    try {
      // const response = await axios.get(url)
      // console.log(response);
      // const products = response.data
      // dbg1. we can get it from mongo or via API
      console.log(products_data);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products_data })
      // dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })

    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }


  useEffect(() => {
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state}}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  console.log('useProductsContext.1');

  return useContext(ProductsContext)
}
