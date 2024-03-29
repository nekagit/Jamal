<template>
  <main class="main h-screen w-full">
    <!-- <AImage :currentImage="currentImage" /> -->
    <!-- <JumboTron /> -->
  </main>
</template>

<script setup lang="ts">
import img1 from '@/assets/1.jpg'
import { ref } from 'vue'

const currentImage = ref(img1)
</script>

<style scoped>
.main {
  background-color: rgb(26, 26, 26);
}
</style>
