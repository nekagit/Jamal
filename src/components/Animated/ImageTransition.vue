<template>
        <div class="absolute inset-0 flex items-center justify-center">
          <img :src="currentImage" alt="Zooming Picture" class="zoom-effect">
        </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import img1 from '@/assets/1.jpg'
  import img2 from '@/assets/2.jpg'
  const showLoadingBar = ref(true);
  const currentImage = ref(img1);
  
  setTimeout(() => {
    showLoadingBar.value = false;
    currentImage.value = img2;
  }, 10000);
  </script>
  
  <style scoped>
  .loading-bar {
    transition: width 10s linear;
  }
  
  .zoom-effect {
    animation: zoom-in 5s infinite;
  }
  
  @keyframes zoom-in {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>
  