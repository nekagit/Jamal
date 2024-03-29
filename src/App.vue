<script setup lang="ts">
import IconTransition from '@/components/Animated/IconTransition.vue';
import "the-new-css-reset/css/reset.css";
import { RouterView } from 'vue-router';
import 'animate.css';
import '@/assets/base.css';
import '@/assets/main.css';
import { ref } from 'vue';
const showIcon = ref(true)

setTimeout(() => {
  showIcon.value = false
}, 3000)

</script>

<template>
  <IconTransition v-if="showIcon" />
  <div v-else >
    <RouterView />
  </div>
</template>

<style scoped>
</style>
