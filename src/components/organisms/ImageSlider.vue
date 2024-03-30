<template>
  <div>
    <AImage :currentImage="props.image"  />
</div>
</template>

<script setup lang="ts">
interface IImageSlider {
    image: string
}
import { ref } from 'vue';
import AImage from '@/components/atoms/AImage.vue'
const props = defineProps<IImageSlider>()

</script>

<style scoped>
/* Add your component styles here */
</style>
