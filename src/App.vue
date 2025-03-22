<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <section class="py-5 w-[80%] m-auto text-4xl">Category name</section>
  <RouterView />
</template>
