<script setup lang="ts">
import type { IProduct } from '@/models/common/types'
import { onMounted, ref } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useRoute } from 'vue-router'
import { ShoppingBasket } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart'

const slug = useRoute().params.slug as string
const store = useProductsStore()
const cartStore = useCartStore()
const { getProductBySlug } = store
const product = ref<IProduct>()

const handleAddToCart = () => {
  cartStore.addToCart(product.value!)
}

onMounted(async () => {
  product.value = await getProductBySlug(slug)
})
</script>

<template>
  <div>
    <div class="md:w-[80%] w-[95%] m-auto md:flex sm:grid gap-10">
      <div class="md:w-1/2">
        <img :src="product?.imageUrl" :alt="product?.name" />
      </div>
      <div class="grid gap-5 md:gap-5">
        <span class="md:text-5xl text-2xl"> {{ product?.name }}</span>
        <div>
          <span class="font-bold">Product Details:</span>
          <div v-html="product?.description" class="md:w-1/2 grid gap-2 p-3"></div>
        </div>
        <div class="flex gap-3 w-1/2 justify-between">
          <div>
            <span>Price:</span>
            <span class="font-bold"> {{ product?.defaultDisplayedPriceFormatted }}</span>
          </div>
          <div
            @click="handleAddToCart"
            class="flex justify-center items-center h-20 gap-3 bg-primary p-4 cursor-pointer hover:bg-teal-300"
          >
            <ShoppingBasket /> Add To Cart
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
