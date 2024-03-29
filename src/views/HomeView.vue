<template>
  <main class="main h-screen w-full ">
    <div class="grid place-content-center text-white text-l">
      <MenuButton ref="menuButton" class="menuButton" />
    </div>
    <div>MainCard</div>
    <div>ScrollBar</div>
  </main>
</template>

<script setup lang="ts">
import img1 from '@/assets/1.jpg'
import { onMounted } from 'vue'
import MenuButton from '@/components/molekules/MenuButton.vue'
import gsap from 'gsap'
onMounted(() => {
  const tl = gsap.timeline({ duration: 1, repeat: 1 })
  tl.fromTo('menuButton', { opacity: 0, }, { opacity: 1 })
})
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(31, 29, 25);
  padding-top: 3.5rem;
}

</style>
