<script setup lang="ts">
interface IAImage {
    currentImage: string
}
const props = defineProps<IAImage>()
</script>




<template>
      <div class="flex items-center justify-center">
        <img :src="props.currentImage" alt="Zooming Picture" class="zoom-effect">
      </div>
</template>

<style scoped>
.zoom-effect {
  /* animation: zoom-in 15s infinite; */
  max-height: 50vh!important;
}

@keyframes zoom-in {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1.3);
  }
}

</style>