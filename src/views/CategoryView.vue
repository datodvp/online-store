<script setup lang="ts">
import type { ICategory } from '@/models/common/types'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import ProductList from '@/components/ProductList/ProductList.vue'

const route = useRoute()
const slug = route.params.slug as string

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)
const { fetchProducts } = productsStore

const currentCategory = ref<ICategory>()
const store = useCategoriesStore()
const { getCategoryBySlug } = store

onMounted(() => {
  currentCategory.value = getCategoryBySlug(slug)
  fetchProducts()
})

watch(currentCategory, () => {
  fetchProducts(currentCategory.value?.id)
})
</script>

<template>
  <section class="flex justify-center">
    <ProductList :products="products" />
  </section>
</template>
