<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import TheCategories from '../TheCategories/TheCategories.vue'
import { useCategoriesStore } from '@/stores/categories'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { RouterLink } from 'vue-router'

const store = useCategoriesStore()
const { currentCategory } = storeToRefs(store)
const cartStore = useCartStore()
const { products } = storeToRefs(cartStore)
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
      <div class="flex justify-between m-auto w-[80%] relative">
        <TheCategories />
        <RouterLink to="/cart">
          <ShoppingCart class="z-10" />
          <span
            class="absolute top-[-10px] right-[-15px] bg-white rounded-full w-5 h-5 flex justify-center items-center"
          >
            {{ products.length }}
          </span>
        </RouterLink>
      </div>
    </section>
    <section class="py-3 sm:text-2xl md:text-3xl mb-5">
      <div class="flex justify-between m-auto w-[80%] text-primary mt-5">
        {{ currentCategory?.name || 'Landing page' }}
      </div>
    </section>
  </header>
</template>
