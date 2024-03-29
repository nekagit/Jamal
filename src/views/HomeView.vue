<template>
  <main class="main h-screen w-full">
    <!-- <AImage :currentImage="currentImage" /> -->
    <!-- <JumboTron /> -->
    <div class="grid place-content-center text-white text-3xl p-1 py-3"><MenuButton /></div>
    <div class="menu mx-auto">
      <!-- <p class="grid place-content-center text-xl p-2 text-white hover:border-red-300">Menu</p> -->
      
    </div>
  </main>
</template>

<script setup lang="ts">
import img1 from '@/assets/1.jpg'
import { ref } from 'vue'
import MenuButton from '@/components/molekules/MenuButton.vue'
const currentImage = ref(img1)
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(47, 47, 47);
}
.menu {
  border: 1px solid white;
  width: fit-content;
  margin-bottom: 1rem;
}
.menu:hover {

}
</style>
