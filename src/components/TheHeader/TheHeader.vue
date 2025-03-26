<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import TheCategories from '../TheCategories/TheCategories.vue'
import { useCategoriesStore } from '@/stores/categories'
import { storeToRefs } from 'pinia'
import { RouterLink, useRoute } from 'vue-router'
import BasketIcon from '@/components/BasketIcon/BasketIcon.vue'

const store = useCategoriesStore()
const route = useRoute()
console.log(route)
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
      <div class="flex justify-between m-auto md:w-[80%] w-[95%] relative">
        <TheCategories />
        <BasketIcon />
      </div>
    </section>
    <section class="py-3 sm:text-2xl md:text-3xl mb-5">
      <div
        v-if="currentCategory?.name"
        class="flex justify-between m-auto md:w-[80%] w-[95%] text-primary mt-5"
      >
        {{ currentCategory?.name }}
      </div>
      <div
        v-if="route?.name === 'cart'"
        class="flex justify-between m-auto md:w-[80%] w-[95%] text-primary mt-5"
      >
        Cart
      </div>
      <div
        v-if="route?.name === 'home'"
        class="flex justify-between m-auto md:w-[80%] w-[95%] text-primary mt-5"
      >
        Landing page
      </div>
    </section>
  </header>
</template>
