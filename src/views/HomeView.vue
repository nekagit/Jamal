<template>
    <main class="main">
        <AnimatedLines />
        <OWelcome />
        <OImage />
    </main>
</template>

<script setup lang="ts">
import AnimatedLines from '@/components/Animated/Backgrounds/AnimatedLines.vue';
import OImage from '@/components/organisms/OImage.vue';
import OWelcome from '@/components/organisms/OWelcome.vue';

</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
}
</style>
