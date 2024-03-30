<template>
  <section class="section">
      <ImageSlider />
  </section>
</template>

<script setup lang="ts">
import ImageSlider from '@/components/molekules/ImageSlider.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  const tl = gsap.timeline({ duration: 3, repeat: 0 })
  tl.fromTo('.sectionCard', { opacity: 0 }, { opacity: 1 })
})

</script>

<style scoped>

</style>
