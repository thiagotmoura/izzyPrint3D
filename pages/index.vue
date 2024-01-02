<script setup>
import ProductList from '~/components/Product/ProductList.vue'
import SearchBar from '~/components/SearchBar.vue'
import ImageViewModal from '~/components/ImageViewModal.vue'
import EmptyState from '~/components/EmptyState.vue';

const productListFiltered = useProductListFiltered().value
const imageView = useImageView()
</script>

<template>
  <div class="max-w-[1400px]">
  <div class="flex gap-5 p-5 max-w-[1350px] flex-row-reverse">
    <SearchBar />
  </div>
  <!-- {{ productListFiltered.length }} -->
    <ProductList v-if="productListFiltered.length"/>
    <EmptyState v-else/>
    <ImageViewModal v-if="imageView" />
  </div>
</template>