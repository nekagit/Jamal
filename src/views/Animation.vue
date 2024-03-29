<template>
  <div id="app">
    <div class="container">
      <form action="">
        <div class="row">
          <label for="name">Enter your name &nbsp;</label>
          <input id="name" type="text" />
        </div>
        <button
          ref="btnRef"
          class="btn"
          @click.prevent="submitForm"
          type="submit"
        >
          <span ref="textRef" class="btn-text">Submit</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

let btnRef = ref(null);
let textRef = ref(null);

onMounted(() => {
  // Get references to the button and text elements
  btnRef.value = document.querySelector('.btn');
  textRef.value = document.querySelector('.btn-text');
});

const submitForm = () => {
  const btn = btnRef.value;
  const text = textRef.value;
  
  // Reset text to original state
  text.textContent = 'Submit';
  
  // Calculate typing duration based on number of characters
  const typingDuration = text.textContent.length * 0.05;
  
  // Animate text using typewriter effect
  gsap.to(text, {
    text: 'Submitted!',
    duration: typingDuration,
    delay: 0.7,
    ease: 'power1.inOut',
    onUpdate: () => {
      // Update text content as it animates
      text.textContent = text.textContent;
    }
  });
};
</script>

<style scoped>
/* Your existing styles */
</style>
