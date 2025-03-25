<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import ProductList from '@/components/ProductList/ProductList.vue'
import { useCategoriesStore } from '@/stores/categories'
import { storeToRefs } from 'pinia'

const route = useRoute()
const store = useCategoriesStore()
const { currentCategory } = storeToRefs(store)

onMounted(() => {
  store.setCurrentCategory(route.params.slug as string)
})

onUpdated(() => {
  store.setCurrentCategory(route.params.slug as string)
})

onUnmounted(() => {
  store.clearCurrentCategory()
})
</script>

<template>
  <section class="flex justify-center">
    {{ route.params.slug }}
    {{ currentCategory }}
    <!-- <ProductList :products="products" /> -->
  </section>
</template>
