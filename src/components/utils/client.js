import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://testapi.io/api/alaaashkar',
})

client.interceptors.response.use((response) => { 
  return response.data
})