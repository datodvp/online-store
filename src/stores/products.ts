import type { IProduct } from '@/models/common/types'
import type { IResponseData } from '@/models/requests/types'
import axiosInstance from '@/services/axiosInstance'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[]>([])

  const fetchProducts = async (categoryId?: number) => {
    let query: string = ''
    if (categoryId) {
      query = '/products?categories=' + categoryId
    } else {
      query = '/products'
    }
    try {
      const response: AxiosResponse<IResponseData<IProduct>> = await axiosInstance.get(query)
      products.value = response.data.items
    } catch (error) {
      console.error('Failed to fetch products', error)
    }
  }

  return { products, fetchProducts }
})
