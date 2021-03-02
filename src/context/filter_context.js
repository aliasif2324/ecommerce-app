import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,

} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
   
  }, [products, state.sort, state.filters])


  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,

        setListView,

      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// dbg2 - get context
export const useFilterContext = () => {
  console.log('products_context.1');

  return useContext(FilterContext)
}
