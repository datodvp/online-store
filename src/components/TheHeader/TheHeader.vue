<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import TheCategories from '../TheCategories/TheCategories.vue'
import { useCategoriesStore } from '@/stores/categories'
import { storeToRefs } from 'pinia'

const store = useCategoriesStore()
const { currentCategory } = storeToRefs(store)
</script>

<template>
  <header>
    <section class="flex justify-center py-4">
      <RouterLink to="/" class="flex justify-center items-center space-x-5">
        <ShoppingCart :size="40" />
        <h1 class="text-4xl">Online Store</h1>
      </RouterLink>
    </section>
    <section class="bg-primary py-3">
      <div class="flex justify-between m-auto w-[80%]">
        <TheCategories />
        <ShoppingCart />
      </div>
    </section>
    <section class="py-3 text-5xl mb-5">
      <div class="flex justify-between m-auto w-[80%]">
        {{ currentCategory?.name || 'Landing page' }}
      </div>
    </section>
  </header>
</template>
