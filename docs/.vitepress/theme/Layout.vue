<script setup>
import DefaultTheme from 'vitepress/theme'
import DumpPreview from './components/DumpPreview.vue'
</script>

<template>
    <DefaultTheme.Layout>
        <template #home-hero-image>
            <DumpPreview />
        </template>
    </DefaultTheme.Layout>
</template>
