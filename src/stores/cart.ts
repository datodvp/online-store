import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IProduct } from '@/models/common/types'

export const useCartStore = defineStore('cart', () => {
  const products = ref<IProduct[]>([])

  function addToCart(product: IProduct) {
    products.value.push(product)
  }

  return { products, addToCart }
})
