<script setup lang="ts">
import { RouterView } from 'vue-router'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import MenuButton from '@/components/molekules/MenuButton.vue'

onMounted(() => {
  const tl = gsap.timeline({ repeat: 0, duration: 0 })
  tl.fromTo(
    '.router',
    { width: '90%', margin: 'auto' },
    { width: '100%', duration: 1,  }
  )
})
</script>

<template>
  <MenuButton />
  <div class="router">
    <RouterView />
  </div>
</template>

<style scoped></style>
