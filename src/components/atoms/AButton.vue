<script setup lang="ts">
import { ref } from 'vue';
const showComponents = ref(false);

const toggleComponents = () => {
  showComponents.value = !showComponents.value;
  console.log(showComponents.value);
};
</script>




<template>
<div>
      <button @click="toggleComponents" class="menu-item-button animate__animated animate__slideInUp cursor-pointer mr-1">
        Jamal
      </button>  <div v-if="showComponents">
        <div class="menu-item animate__animated animate__slideInUp">
          Home
        </div>
        <div class="menu-item animate__animated animate__slideInUp">
          Work
        </div>
        <div class="menu-item animate__animated animate__slideInUp">
          Contact
        </div>
        <div class="menu-item animate__animated animate__slideInUp">
          Impresum
        </div>
      </div>
</div>
</template>

<style scoped>

.menu-item {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.menu-item-button {
  padding: 0.5rem 1rem;
  background-color: #07203d;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  z-index: 999;
}
</style>