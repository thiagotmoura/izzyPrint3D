<script setup>
  import Index from './pages'
  import Logo from './components/Images/Logo.vue'
</script>

<template>
  <div class="flex flex-col items-center p-10 bg-slate-100 min-w-[100vw] min-h-[100vh]">
    <Logo :height="150" class="mb-10" />
    <Index />
  </div>
</template>