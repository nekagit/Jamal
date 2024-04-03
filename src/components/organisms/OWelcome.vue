<template>
  <section class="section">
    <div class="frame cutout">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="md:pr-8">
          <h1>Dear Visitor,</h1>
          <h2 class="mt-4 md:mt-0">Welcome to Jamal Projects!</h2>
          <h3 class="mt-4">
            My parents gave me the name Jamal,<br />
            In Arabic it means beauty.<br />
            I really want to create astonishing buildings. <br />
            This site shows my work until today as a Master student.
          </h3>
          <hr />
          <button class="m-5 learn-more">Learn More</button>
        </div>
        <img :src="image1" alt="asf" class="object-cover md:h-auto" />
      </div>
      <hr class="my-8 md:hidden" />
      <!-- Add your additional content here -->
    </div>
  </section>
</template>

<script setup lang="ts">
import image1 from '@/assets/Jamal/DSC_7492_Kopie.jpg';
</script>

<style scoped>
.frame {
  box-sizing: border-box;
  width: 90%;
  height: 21vh;
  margin: 1em;
  padding: 50px;
  border: 1px solid;
  border-image-source: paint(svg-border-image);
  border-image-slice: calc(100% * var(--svg-slice) / var(--svg-size)) fill;
  resize: both;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); /* Example box shadow */
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.071);
}

.frame.cutout {
  --svg-path: 'M2 0H1C1 .6.6 1 0 1v1c.6 0 1 .4 1 1h1c0-.6.4-1 1-1V1a1 1 0 0 1-1-1Z';
  --svg-size: 3;
  --svg-slice: 1;
  border-image-slice: calc(100% * var(--svg-slice) / var(--svg-size)) fill;
  transition: border-width 200ms ease;
}
.frame.cutout:hover {
  border-width: 0;
}

/* Add any additional styling if needed */ /* Add any additional styling if needed */
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: inherit;
  font-size: 15px;
}

button.learn-more {
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: #f0f1ff;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition:
    background 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  transition:
    transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.learn-more::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #c8c4f9;
  border-radius: inherit;
  -webkit-box-shadow:
    0 0 0 2px #8587b1,
    0 0.625em 0 0 #ffe3e2;
  box-shadow:
    0 0 0 2px #b18597,
    0 0.625em 0 0 #ffe3e2;
  -webkit-transform: translate3d(0, 0.75em, -1em);
  transform: translate3d(0, 0.75em, -1em);
  transition:
    transform 150ms cubic-bezier(0, 0, 0.58, 1),
    box-shadow 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.learn-more:hover {
  background: #e9e9ff;
  -webkit-transform: translate(0, 0.25em);
  transform: translate(0, 0.25em);
}

button.learn-more:hover::before {
  -webkit-box-shadow:
    0 0 0 2px #b18597,
    0 0.5em 0 0 #ffe3e2;
  box-shadow:
    0 0 0 2px #b18597,
    0 0.5em 0 0 #ffe3e2;
  -webkit-transform: translate3d(0, 0.5em, -1em);
  transform: translate3d(0, 0.5em, -1em);
}

button.learn-more:active {
  background: #eae9ff;
  -webkit-transform: translate(0em, 0.75em);
  transform: translate(0em, 0.75em);
}

button.learn-more:active::before {
  -webkit-box-shadow:
    0 0 0 2px #b18597,
    0 0 #ffe3e2;
  box-shadow:
    0 0 0 2px #b18597,
    0 0 #e5e2ff;
  -webkit-transform: tsomethingranslate3d(0, 0, -1em);
  transform: translate3d(0, 0, -1em);
}
</style>
