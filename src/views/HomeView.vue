<template>
  <main class="main h-screen w-full">
    <div ref="menuButton" class="menuButton grid place-content-center text-white text-l">
      <MenuButton ref="menuButton" class="menuButton" />
    </div>
    <div ref="mainCard" class="mainCard grid place-content-center"><ImageSlider :image="getImageSource(selectedImageIndex)" /></div>
    <input type="range" min="1" max="10" v-model="selectedImageIndex" id="imgRange" />
  </main>
</template>

<script setup lang="ts">
import MenuButton from '@/components/molekules/MenuButton.vue';
import ImageSlider from '@/components/organisms/ImageSlider.vue';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import image1 from '@/assets/1.jpg'
import image2 from '@/assets/2.jpg'

const selectedImageIndex = ref(1);

onMounted(() => {
  const tl = gsap.timeline({ duration: 3, repeat: 0 });
  tl.fromTo('.menuButton', { opacity: 0 }, { opacity: 1 });
});

const images = [
  image1,
  image2,
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  'image10.jpg'
];

// Method to get the image source based on the selected index
const getImageSource = (index: number) => {
  return images[index - 1]; // Subtract 1 because array indices start from 0
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(31, 29, 25);
  padding-top: 3.5rem;
}
.mainCard {
  border:1px solid white;
  width: fit-content;
  margin: auto;
  max-height: 500px;
}
</style>
