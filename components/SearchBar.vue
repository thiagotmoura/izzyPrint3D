<script setup>
const searchValue = useSearchValue()
</script>

<template>
  <div class="flex gap-3 items-center text-slate-600">
    <label for="search-value">Buscar:</label>
    <input
      id="search-value"
      v-model="searchValue"
      placeholder="Personagem ou categoria..."
      class="w-60 p-2 rounded-xl"
    />
  </div>
</template>