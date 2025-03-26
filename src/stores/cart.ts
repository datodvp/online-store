import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { IProduct } from '@/models/common/types'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const getLocalStorageCart = () =>
  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []

export const useCartStore = defineStore('cart', () => {
  const products = ref<IProduct[]>(getLocalStorageCart())
  const totalPrice = computed(() =>
    products.value.reduce(
      (accumulator, product) => accumulator + product.price * (product.total || 1),
      0,
    ),
  )
  const totalProducts = computed(() =>
    products.value.reduce((accumulator, product) => accumulator + (product.total || 1), 0),
  )

  function addToCart(product: IProduct) {
    const existingProduct = products.value.find((p) => p.id === product.id)

    if (existingProduct) {
      if (existingProduct.total) {
        existingProduct.total += 1
      } else {
        existingProduct.total = 2
      }
    } else {
      products.value.push({ ...product })
    }
    toast('Product added to basket!', {
      theme: 'auto',
      type: 'success',
      position: 'bottom-left',
      autoClose: 1000,
      hideProgressBar: true,
      dangerouslyHTMLString: true,
    })
  }

  function removeFromCart(product: IProduct) {
    const index = products.value.findIndex((p) => p.id === product.id)

    if (index !== -1) {
      const existingProduct = products.value[index]

      if (existingProduct.total && existingProduct.total > 2) {
        existingProduct.total -= 1
      } else if (existingProduct.total === 2) {
        delete existingProduct.total
      } else {
        products.value.splice(index, 1)
      }
    }

    toast('Product removed from basket!', {
      theme: 'auto',
      type: 'success',
      position: 'bottom-left',
      autoClose: 1000,
      hideProgressBar: true,
      dangerouslyHTMLString: true,
    })
  }
  function clearCart() {
    products.value = []
  }

  watch(
    () => products.value,
    (state) => {
      // persist the whole state to the local storage whenever it changes
      localStorage.setItem('cart', JSON.stringify(state))
    },
    { deep: true },
  )

  return { products, totalPrice, totalProducts, addToCart, removeFromCart, clearCart }
})
