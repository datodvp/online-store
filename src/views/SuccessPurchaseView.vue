<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { onMounted } from 'vue'

const store = useCartStore()

const { clearCart } = store
const { products, totalPrice } = store

onMounted(() => {
  clearCart()
})
</script>
<template>
  <section class="m-auto grid justify-center items-center">
    <div class="text-4xl mb-5 text-primary">You bought succesfully!</div>
    <div v-for="product in products" :key="product.id">
      <div class="flex gap-4 justify-between">
        <span>{{ product.name }}:</span>
        <div>
          <span v-if="product.total" class="mr-5">X{{ product.total }}</span>
          <span>{{ (product.price * (product.total || 1)).toFixed(2) }} €</span>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-5">Total price: {{ totalPrice.toFixed(2) }} €</div>
  </section>
</template>
