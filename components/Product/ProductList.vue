<script setup>
import ProductItem from './ProductItem.vue';

const productList = useProductList().value
const searchValue = useSearchValue()

let productListFiltered = useProductListFiltered()

const searchProduct = (searchValue) => {
  productListFiltered = productList.filter(product => 
    product.name.toLowerCase().match(searchValue.toLowerCase())
    || product.category.toLowerCase().match(searchValue.toLowerCase())
  )

  return productListFiltered
}
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <div v-for="product in searchProduct(searchValue)" :key="product.id" class="flex flex-col gap-5 p-5 w-[670px] overflow-hidden shadow-lg hover:shadow-2xl">
      <ProductItem :product="product" />
    </div>
  </div>
</template>