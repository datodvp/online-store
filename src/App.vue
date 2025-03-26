<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import { useCategoriesStore } from '@/stores/categories'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const store = useCategoriesStore()
const { fetchCategories } = store
const { isLoading } = storeToRefs(store) // Correct: make `isLoading` reactive

const initializeApp = () => {
  fetchCategories()
}

onMounted(() => {
  initializeApp()
})
</script>

<template>
  <TheHeader />
  <RouterView v-if="!isLoading" />
</template>

<style>
#nprogress .bar {
  background: #47d1d1;
  height: 5px;
}
</style>
