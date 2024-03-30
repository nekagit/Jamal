<template>
  <section class="section ">
    <div>
        
        <h1>Dear Visitor,</h1>
        <h2 class="w-[70%]">Welcome to Jamal Projects!</h2>
        <img :src="image1" />
        <hr>
        <h3 class="w-[33%]">
            My parents gave me the name Jamal,<br/> In arabic it means beauty.<br/>  I really want to create
            something astonishing. This site shows my work until today as a Master student.
        </h3>
        <div>
        </div>
    </div>
    <div>
        asdf
    </div>
  </section>
</template>

<script setup lang="ts">
import type AImage from '../atoms/AImage.vue';
import image1 from '@/assets/1.jpg'
</script>

<style scoped></style>
