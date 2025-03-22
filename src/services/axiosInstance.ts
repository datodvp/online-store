import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_API_URL
const storeID = import.meta.env.VITE_STORE_ID

const axiosInstance = axios.create({
  baseURL: `${baseURL}${storeID}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
})

export default axiosInstance
