export const useApi = async (endpoint: string, options = {}) => {
  const config = useRuntimeConfig()
  
  // Örnek API base URL senaryosu
  const baseUrl = 'https://jsonplaceholder.typicode.com' 

  return await useFetch(`${baseUrl}${endpoint}`, {
    ...options,
    onResponse({ response }) {
      // Global veri işleme mantığı buraya gelebilir
    },
    onResponseError({ response }) {
      console.error('API Hatası:', response._data)
    }
  })
}
