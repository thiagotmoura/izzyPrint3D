<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'Aaaa',
    },
    category: {
      type: String,
      default: 'AAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    description: {
      type: String,
      default: 'AAAa',
    }
  })
</script>

<template>
  <div class="fixed h-[100%] w-[100vw] z-998 justify-center items-center flex left-0 right-0 top-0">
    <div class="absolute h-[100%] w-[100vw] left-0 right-0 top-0 bg-black opacity-85"></div>
    <div class="relative flex flex-col text-white">
      <div class="bg-slate-900 text-white justify-center pl-2 text-lg relative h-[30px] w-[601px] overflow-hidden whitespace-nowrap">
        <h1>{{ title }} {{ category ? `- ${category}` : '' }}</h1>
        <Icon 
          name="material-symbols:close" 
          class=" text-slate-100 hover:text-white text-2xl opacity-70 hover:opacity-100 absolute right-1 top-1 cursor-pointer"
          @click="$emit('close')"
        />
      </div>
      <slot />
      <div class="bg-slate-900 text-white justify-center text-center text-xs p-1 h-[25px] w-[601px] overflow-hidden">
        <h1>{{ description }}</h1>
      </div>
    </div>
  </div>
</template>
