<template>
  <div class="main grid h-screen place-content-center text-3xl">
    <div class="grid place-content-center w-full">
      <div ref="icon" class="icon">Jamal Nachname</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import SplitType from 'split-type';
import { onMounted } from 'vue';

onMounted(() => {
  const ourText = new SplitType('.icon', { types: 'chars' });
  const chars = ourText.chars;
  const tl = gsap.timeline({repeat: 2, yoyo: true})
  tl.fromTo(
    chars,
    { opacity: 0, fontSize: "42px" },
    { opacity: 1, fontSize:"41px", duration: 1, stagger: 0.05, delay: 0.0 } // Adjust stagger and delay as needed
  );
});
</script>

<style scoped>
.main {
  background-color: rgb(26, 26, 26);

}
.icon {
  color:white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}</style>