<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductList from '@/components/ProductList/ProductList.vue'
import { useCategoriesStore } from '@/stores/categories'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'

const route = useRoute()
const categoriesStore = useCategoriesStore()
const { currentCategory } = storeToRefs(categoriesStore)
const productsStore = useProductsStore()
const { products, error } = storeToRefs(productsStore)

onMounted(() => {
  categoriesStore.setCurrentCategory(route.params.slug as string)
  fetchProducts()
})

watch(
  () => route.params.slug,
  (newSlug) => {
    categoriesStore.setCurrentCategory(newSlug as string)
    fetchProducts()
  },
)

onUnmounted(() => {
  categoriesStore.clearCurrentCategory()
})

const fetchProducts = () => {
  if (currentCategory.value) {
    productsStore.fetchProducts(currentCategory.value.id)
  }
}
</script>

<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <section class="flex justify-center">
      <ProductList :products="products" />
    </section>
  </div>
</template>
