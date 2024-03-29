<template>
    <div class="main text-3xl grid place-content-center w-full">
      <div ref="icon" class="icon">Welcome to Jamal Projects</div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import SplitType from 'split-type'
import { onMounted } from 'vue'
onMounted(() => {
  const ourText = new SplitType('.icon', { types: 'chars' })
  const chars = ourText.chars
  const tl = gsap.timeline({ repeat: 1, yoyo: true})
  tl.fromTo(
    chars,
    { opacity: 0 },
    { opacity: 1,  duration: 1, stagger: 0.01, delay: 0.0 } 
  )
})
</script>

<style scoped>
.icon {
  color: rgb(255, 255, 255);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>
