<template>
    <AImage :currentImage="props.currentImage" />
 
</template>

<script setup lang="ts">
import AImage from '@/components/atoms/AImage.vue';
interface IMImageSlider {
    currentImage: string
}
const props = defineProps<IMImageSlider>()
</script>

<style scoped>
</style>
