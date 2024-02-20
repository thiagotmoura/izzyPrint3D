<script setup>
  import ProductList from '~/components/Product/ProductList.vue'
  import SearchBar from '~/components/SearchBar.vue'
  import ImageViewModal from '~/components/ImageViewModal.vue'
  import EmptyState from '~/components/EmptyState.vue';

  const productListFiltered = useProductListFiltered()
  const productView = useProductView()
</script>

<template>
  <div class="relative max-w-[1400px]">
    <div class="mb-20">
      <SearchBar />
    </div>

    <ProductList v-if="productListFiltered.length"/>
    <EmptyState v-else class="min-w-[1200px]"/>

    <ImageViewModal v-if="productView" />
  </div>
</template>