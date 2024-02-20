<script setup>
  import { watch } from 'vue'

  const searchValue = useSearchValue()
  const productListFiltered = useProductListFiltered()

  watch(searchValue, (newValue) => {
    productListFiltered.value = useSearchProduct(newValue)
  })
</script>

<template>
  <div class="absolute right-10 flex gap-3 items-center text-slate-600">
    <label for="search-value">Buscar:</label>
    <input
      id="search-value"
      v-model="searchValue"
      placeholder="Personagem ou categoria..."
      class="w-60 p-2 rounded-xl border border-transparent focus:outline-none"
    />
  </div>
</template>