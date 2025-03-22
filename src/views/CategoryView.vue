<script setup lang="ts">
import type { ICategory } from '@/models/common/types'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories'

const route = useRoute()
const slug = route.params.slug as string

const currentCategory = ref<ICategory>()
const store = useCategoriesStore()
const { getCategoryBySlug } = store

onMounted(() => {
  currentCategory.value = getCategoryBySlug(slug)
})
</script>

<template>
  <div>CategoryView {{ $route.params.slug }}</div>
</template>
