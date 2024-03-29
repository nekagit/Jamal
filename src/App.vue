<script setup lang="ts">
import IconTransition from '@/components/Animated/IconTransition.vue';
import "the-new-css-reset/css/reset.css";
import { RouterView } from 'vue-router';
import 'animate.css';
import '@/assets/base.css';
import '@/assets/main.css';
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import MenuButton from '@/components/molekules/MenuButton.vue'
const showIcon = ref(true)
const tll = gsap.timeline({duration: 1, repeat: 1})

onMounted(() => {
tll.fromTo('menuButton', {opacity: 0,y:-10}, {opacity: 1,y:0})

  setTimeout(() => {
    showIcon.value = false
    const tl = gsap.timeline({ repeat: 1, duration: 1 })
    tl.fromTo(
      ".router",
      { opacity: 0 },
      { opacity: 1 }
    )
  }, 3000)
})
</script>

<template>
  <IconTransition v-if="showIcon" />
  <div ref="router" class="router" v-else>
    <div class="menuButton grid place-content-center text-white text-l">
    <MenuButton ref="menuButton" class="menuButton"  />
  </div>
    <RouterView />
  </div>
</template>

<style scoped>
.menuButton {
  padding-top: 1.5rem;

}
</style>
