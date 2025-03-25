import type { ICategory } from '@/models/common/types'
import type { IResponseData } from '@/models/requests/types'
import axiosInstance from '@/services/axiosInstance'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])
  const currentCategory = ref<ICategory>()
  const isLoading = ref(false)

  const setIsLoading = (value: boolean) => {
    isLoading.value = value
  }

  const fetchCategories = async () => {
    try {
      const response: AxiosResponse<IResponseData<ICategory>> =
        await axiosInstance.get('/categories')
      categories.value = response.data.items
    } catch (error) {
      console.error('Failed to fetch categories', error)
    } finally {
      isLoading.value = false
    }
  }

  const setCurrentCategory = (slug: string) => {
    currentCategory.value = categories.value.find((category) => category.autogeneratedSlug === slug)
  }

  const clearCurrentCategory = () => {
    currentCategory.value = {} as ICategory
  }

  return {
    categories,
    isLoading,
    currentCategory,
    fetchCategories,
    setCurrentCategory,
    clearCurrentCategory,
    setIsLoading,
  }
})
