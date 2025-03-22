<script setup lang="ts">
import type { IProduct } from '@/models/common/types'
import { defineProps } from 'vue'
import ProductListItem from './ProductListItem/ProductListItem.vue'

interface props {
  products: IProduct[]
}

const props = defineProps<props>()
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-20">
    <div v-for="product in products" :key="product.id">
      <ProductListItem :product="product" />
    </div>
  </section>
</template>
