<script setup lang="ts">
import type { IProduct } from '@/models/common/types'
import { useCartStore } from '@/stores/cart'
import { Store } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const cartStore = useCartStore()
const { products, totalPrice } = storeToRefs(cartStore)
const router = useRouter()

const handleRemove = (product: IProduct) => {
  cartStore.removeFromCart(product)
}

const handlePurchase = () => {
  if (products.value.length) {
    router.push('/success-purchase')
  } else {
    toast('There are not products in the basket!', {
      theme: 'auto',
      type: 'warning',
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: true,
      dangerouslyHTMLString: true,
    })
  }
}
</script>

<template>
  <div class="md:w-[80%] w-[95%] m-auto">
    <div class="md:flex gap-3 justify-between">
      <div>
        <div v-for="product in products" :key="product.id">
          <section class="justify-between h-[200px] md:h-[150px] border border-gray-200 p-4 flex">
            <div class="flex gap-1 md:gap-10">
              <img class="h-full" :src="product.imageUrl" :alt="product.name" />
              <div>
                <h3>{{ product.name }}</h3>
                <p class="font-bold">{{ product.defaultDisplayedPriceFormatted }}</p>
                <p v-if="product.total">Total: {{ product.total }}</p>
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <button
                @click="handleRemove(product)"
                class="float-right bg-primary cursor-pointer flex justify-center items-center p-3 h-min hover:bg-teal-300"
              >
                Remove
              </button>
            </div>
          </section>
        </div>
        <div v-if="!products.length">There are not products in the basket</div>
      </div>

      <div class="justify-end flex md:text-xl font-bold float-right gap-3">
        <div class="flex justify-center items-center h-min gap-10">
          <span class="font-normal"
            >Total Price: <span class="font-bold">{{ totalPrice.toFixed(2) }} €</span></span
          >
          <button
            @click="handlePurchase"
            class="flex bg-primary h-min p-1 md:p-3 hover:bg-teal-300 cursor-pointer justify-center items-center"
          >
            <Store /> Purchase
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
