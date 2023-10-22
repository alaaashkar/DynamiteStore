import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://fakestoreapi.com/products/category'
})

client.interceptors.response.use((response) => {
  return response.data
})



