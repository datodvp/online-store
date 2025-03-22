<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const store = useProductsStore()
const { products } = storeToRefs(store)
const { fetchProducts } = store

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <main>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
    </div>
  </main>
</template>
