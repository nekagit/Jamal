<template>
    <AImage :currentImage="props.currentImage" />
    <div class="imageText text-center">

        <h1>Titel des Projekts</h1>
        <h3>ProjektTyp  </h3>
    </div>
</template>

<script setup lang="ts">
import AImage from '@/components/atoms/AImage.vue';
interface IMImageSlider {
    currentImage: string
}
const props = defineProps<IMImageSlider>()
</script>

<style scoped>
.imageText {
  color: #002626;

}
</style>
