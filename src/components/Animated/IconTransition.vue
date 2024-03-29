
<script setup lang="ts">
import gsap from "gsap";
import useGSAP from "vue-gsap";
    gsap.registerPlugin(useGSAP);

    const container = useRef();
        gsap.registerPlugin(useGSAP);

    const container = useRef();

useGSAP(
  () => {
    gsap.fromTo(
      "header",
      { width: "70%", margin:"auto" },
      { width: "100%", duration: 2 } 
    );
  },
  { scope: container }
);
</script>


<template>
  <div class="grid h-screen place-content-center text-3xl">
    <div class="grid place-content-center">
      <div class="animate__animated animate__pulse">Cano Kaarik</div>
    </div>
  </div>
</template>

<style>
</style>
