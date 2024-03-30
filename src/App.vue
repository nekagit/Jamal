<script setup lang="ts">
import { RouterView } from 'vue-router'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

onMounted(() => {
  const tl = gsap.timeline({ repeat: 0, duration: 0 })
  tl.fromTo(
    '.router',
    { width: '0%', margin: 'auto' },
    { width: '95%', duration: 3, ease: 'power2.inOut' }
  )
})
</script>

<template>
  <div ref="router" class="router">
    <RouterView />
  </div>
</template>

<style scoped>
.router {
  border-left: 1px solid rgba(255, 0, 0, 0.208);
  border-right: 1px solid rgba(255, 0, 0, 0.261);
}
</style>
