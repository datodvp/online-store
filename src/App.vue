<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style>
#nprogress .bar {
  background: #47d1d1;
  height: 5px;
}
</style>
