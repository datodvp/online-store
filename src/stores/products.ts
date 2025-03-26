import type { IProduct } from '@/models/common/types'
import type { IResponseData } from '@/models/requests/types'
import axiosInstance from '@/services/axiosInstance'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null) // Added error state

  const fetchProducts = async (categoryId?: number): Promise<void> => {
    // Explicit return type
    isLoading.value = true
    error.value = null // Reset error state
    const query: string = categoryId ? `/products?categories=${categoryId}` : '/products'

    try {
      const response: AxiosResponse<IResponseData<IProduct>> = await axiosInstance.get(query)
      products.value = response.data.items
    } catch (err) {
      console.error('Failed to fetch products', err)
      error.value = 'Failed to fetch products. Please try again later.' // Set error message
    } finally {
      isLoading.value = false
    }
  }

  return { products, isLoading, error, fetchProducts } // Return error state
})
