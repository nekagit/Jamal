<template>
  <div class="main grid h-screen place-content-center text-3xl">
    <div class="grid place-content-center w-full">
      <div ref="icon" class="icon">Welcome to Jamal Projects</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import SplitType from 'split-type'
import { onMounted,ref } from 'vue'
onMounted(() => {
  const ourText = new SplitType('.icon', { types: 'chars' })
  const chars = ourText.chars
  const tl = gsap.timeline({ repeat: 1, yoyo: true})
  tl.fromTo(
    chars,
    { opacity: 0, fontSize: '42px' },
    { opacity: 1, fontSize: '41px', duration: 1, stagger: 0.01, delay: 0.0 } 
  )
})
</script>

<style scoped>
.main {
  background-color: rgb(35, 35, 35);
}
.icon {
  color: rgb(255, 255, 255);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>
