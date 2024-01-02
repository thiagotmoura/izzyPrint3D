import { PRODUCTS } from '../assets/products.js'

export const useProductList = () => useState('productList', () => PRODUCTS)
export const useProductListFiltered = () => useState('productListFiltered', () => useProductList().value)
export const useSearchValue = () => useState('searchValue', () => '')
export const useImageView = () => useState('imageView', () => '')

export const useSearchProduct = (searchValue = '') => {
    useProductListFiltered().value = useProductList().value.filter(product => 
      product.name.toLowerCase().match(searchValue.toLowerCase())
      || product.category.toLowerCase().match(searchValue.toLowerCase())
    )

    return useProductListFiltered().value
  }