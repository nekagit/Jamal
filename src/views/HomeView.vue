<template>
  <main class="main h-screen w-full p-5">
    <div class="menuButton grid place-content-center text-white text-l">
      <!-- <MenuButton ref="menuButton" class="menuButton"  /> -->
      <!-- <MenuHeader /> -->
    </div>
    <div>MainCard</div>
    <div>ScrollBar</div>
    <!-- <AImage :currentImage="currentImage" /> -->
    <!-- <JumboTron /> -->
  </main>
</template>
 
<script setup lang="ts">
import img1 from '@/assets/1.jpg'
import { ref, onMounted } from 'vue'
import MenuHeader from '@/components/molekules/MenuHeader.vue'
import MenuButton from '@/components/molekules/MenuButton.vue'
import gsap from 'gsap'
const tl = gsap.timeline({duration: 1, repeat: 1})
onMounted(()=>{
tl.fromTo('menuButton', {opacity: 0,y:-10}, {opacity: 1,y:0})
})
const currentImage = ref(img1)
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(31, 29, 25);
  padding-top: 3rem;
}
</style>
