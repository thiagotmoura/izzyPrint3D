<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { product } = props
const imageView = useImageView()
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline mb-6 text-cyan-800">{{ product.name }}</h1>
    <div class="flex gap- h-[250px]">
      <div>
        <img :src="product.images[0]" class="cover" @click="imageView = product.images[0]">
      </div>
      <div class="flex flex-col flex-wrap">
        <template v-for="image, index in product.images">
          <img v-if="index" :src="image" class="images" @click="imageView = image">
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  @apply h-fit p-1 rounded-2xl hover:border-4 hover:border-sky-300 cursor-pointer
}

.cover {
  @apply w-[250px]
}

.images {
  @apply w-[125px]
}
</style>