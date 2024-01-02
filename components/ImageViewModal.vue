<script setup>
const image = useImageView()
</script>

<template>
  <div class="fixed h-[100%] w-[100wh] z-998 justify-center items-center flex left-0 right-0 top-0">
    <div class="absolute h-[100%] w-[100wh] left-0 right-0 top-0 bg-black opacity-85"></div>
    <div class="relative flex flex-col text-white">
      <img :src="image" />
      <button @click="image = null" class="bg-cyan-950 p-1 hover:bg-cyan-900">Fechar</button>
    </div>
  </div>
</template>