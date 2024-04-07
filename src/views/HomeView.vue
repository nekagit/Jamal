<template>
    <main class="main">
        <OWelcome />
        <OImage />
    </main>
</template>

<script setup lang="ts">
import OImage from '@/components/organisms/OImage.vue';
import OWelcome from '@/components/organisms/OWelcome.vue';
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
}
</style>
