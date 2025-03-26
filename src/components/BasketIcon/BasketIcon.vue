<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { ShoppingCart } from 'lucide-vue-next'

const cartStore = useCartStore()
const { totalProducts } = storeToRefs(cartStore)
</script>

<template>
  <RouterLink to="/cart">
    <ShoppingCart class="z-10" />
    <span
      v-if="totalProducts"
      class="absolute top-[-10px] right-[-15px] bg-white rounded-full w-5 h-5 flex justify-center items-center"
    >
      {{ totalProducts }}
    </span>
  </RouterLink>
</template>
