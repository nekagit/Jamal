<script setup lang="ts">
const showLoadingBar = ref(true);

const toggleComponents = () => {
  showComponents.value = !showComponents.value;
  console.log(showComponents.value);
};
</script>




<template>
<div>
  <div v-if="showLoadingBar" class="loading-bar absolute top-0 left-0 w-full h-1 bg-blue-500">
      <div class="loading-progress"></div>
    </div>
</div>
</template>

<style scoped>
.loading-bar {
  height: 3px;
  overflow: hidden;
}

.loading-progress {
  width: 0;
  height: 100%;
  background-color: #1a202c; /* Adjust the color as needed */
  animation: loading-progress-animation 10s infinite;
}

@keyframes loading-progress-animation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>