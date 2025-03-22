<script setup lang="ts">
import type { IProduct } from '@/models/common/types'
import { defineProps } from 'vue'

interface props {
  product: IProduct
}

const props = defineProps<props>()
const { product } = props
</script>
<template>
  <section class="w-72 cursor-pointer hover:shadow-lg rounded-2xl border border-gray-200 p-4">
    <img :src="product.imageUrl" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.defaultDisplayedPriceFormatted }}</p>
    <button>Add to cart</button>
  </section>
</template>
