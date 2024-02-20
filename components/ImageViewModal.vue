<script setup>
  import { ref } from 'vue'

  import Modal from './Modal.vue'

  const data = useProductView()
  
  const index = ref(data.value.index)
  const product = data.value.product
  const images = product.images

  function prevImage() {
    index.value = index.value - 1
  }

  function nextImage() {
    index.value = index.value + 1
  }

</script>

<template>
  <Modal
    :title="product.name"
    :category="product.category"
    :description="product.description"
    @close="data = null"
  >
    <div class="relative h-[601px] w-[601px] flex items-center justify-center  bg-black">
      <TransitionGroup name="fade" tag="div">
        <template v-for="(image, i) in images" :key="image">
          <img :src="image" alt="Imagem" v-show="i === index" />
        </template>
      </TransitionGroup>

      <button
        v-if="index > 0"
        @click="prevImage" 
        class="absolute top-[45%] left-[10px]"
      >
        <Icon name="ep:arrow-left-bold"  class=" text-cyan-400 text-5xl opacity-70 hover:opacity-100"/>
      </button>
      <button
        v-if="index < images.length - 1"
        @click="nextImage"
        class="absolute top-[45%] right-[10px]"
      >
        <Icon name="ep:arrow-right-bold" class=" text-cyan-400 text-5xl opacity-70 hover:opacity-100" />
      </button>
    </div>
  </Modal>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 4.5s;
}
.fade-leave-active {
  position: absolute;
  transition: opacity 2.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  position: absolute;
}

.fade-enter-from, .fade-leave-from {
  opacity: 0;
  position: absolute;
}
</style>
