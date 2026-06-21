import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as { name: string; email: string } | null,
    isLoggedIn: false
  }),
  actions: {
    login(name: string, email: string) {
      this.user = { name, email }
      this.isLoggedIn = true
    },
    logout() {
      this.user = null
      this.isLoggedIn = false
    }
  }
})
