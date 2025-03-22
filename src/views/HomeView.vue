<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import ProductList from '@/components/ProductList/ProductList.vue'

const store = useProductsStore()
const { products } = storeToRefs(store)
const { fetchProducts } = store

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <section class="flex justify-center">
    <ProductList :products="products" />
  </section>
</template>
