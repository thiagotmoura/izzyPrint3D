<script setup>
  import ProductItem from './ProductItem.vue';

  const productListFiltered = useProductListFiltered()
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <div 
      v-for="product in productListFiltered" 
      :key="product.id" 
      class="flex flex-col gap-5 p-5 w-[670px] overflow-hidden shadow-lg hover:shadow-2xl"
    >
      <ProductItem :product="product" />
    </div>
  </div>
</template>