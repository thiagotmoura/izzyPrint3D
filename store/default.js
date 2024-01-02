// import { PRODUCTS } from '../assets/products.js'

// export const useDefaultStore = defineStore('productListFiltered', () => {
//     const productList = ref(PRODUCTS)
//     const productListFiltered = ref(productList)
//     // const doubleCount = computed(() => count.value * 2)
//     function useSearchProduct() {
//         productListFiltered = productList.filter(product => 
//           product.name.toLowerCase().match(searchValue.toLowerCase())
//           || product.category.toLowerCase().match(searchValue.toLowerCase())
//         )
//     }
  
//     return { productList, productListFiltered, useSearchProduct }
//   })