import { PRODUCTS } from '../assets/products.js'
import { orderBy } from 'lodash'

export const useProductList = () => useState('productList', () => orderBy(PRODUCTS, 'name', 'asc'))
export const useProductListFiltered = () => useState('productListFiltered', () => useProductList().value)
export const useSearchValue = () => useState('searchValue', () => '')
export const useProductView = () => useState('productView', () => null)

export const useSearchProduct = (searchValue = '') => {
    useProductListFiltered().value = useProductList().value.filter(product => 
      product.name.toLowerCase().match(searchValue.toLowerCase())
      || product.category.toLowerCase().match(searchValue.toLowerCase())
    )

    return useProductListFiltered().value
  }
