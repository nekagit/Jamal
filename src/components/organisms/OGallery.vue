<template>
  <div v-for="(imageRow, rowIndex) in imageRows" class="gallery" :key="rowIndex">
    <div class="gallery-row">
      <div >
        <div v-for="(image) in imageRow" :key="image" class="image-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
          <img :src="image" class="gallery-image" alt="Gallery Image" />
          <div class="text-overlay" ref="textOverlay">Slide Up Text</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import image1 from '@/assets/old/1.jpg'
import image2 from '@/assets/old/2.jpg'

// Define the array of image rows
const imageRows = [
  [image1, image2],
  [image1, image2],
  [image1, image2],
  [image1, image2]
]

// Function to handle mouse enter event
const handleMouseEnter = (event: MouseEvent) => {
  const textOverlay = (event.target as HTMLElement).querySelector('.text-overlay')
  const image = (event.target as HTMLElement).querySelector('.gallery-image');
  if (textOverlay && image) {
    textOverlay.style.width = `${image.clientWidth}px`; // Set width to match the image width
    textOverlay.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
  }
}

// Function to handle mouse leave event
const handleMouseLeave = (event: MouseEvent) => {
  const textOverlay = (event.target as HTMLElement).querySelector('.text-overlay')
  if (textOverlay) {
    textOverlay.style.clipPath = 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
  }
}
</script>

<style scoped>
.gallery {
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent images from wrapping to the next line */
}

.gallery-row {
  display: flex;
  flex-direction: row;
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

.image-container {
  position: relative;
}

.gallery-image {
  margin: 0; /* Remove margin */
  padding: 0; /* Remove padding */
  height: 200px; /* Adjust height as needed */
  width: auto; /* Allow images to adjust width automatically */
  transition: opacity 0.3s ease; /* Add transition for smooth hover effect */
}

.text-overlay {
  position: absolute;
  height: 200px;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with 50% opacity */
  color: white;
  padding: 10px;
  text-align: center;
  transition: clip-path 0.3s ease, width 0.3s ease; /* Add transition for smooth sliding effect */
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); /* Initially hides the text */
}
</style>
