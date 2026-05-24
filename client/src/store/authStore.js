import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,

      // Login action
      login: (userData) => {
        set({
          user: userData,
          isAuthenticated: true,
          token: `token_${Date.now()}`,
        })
      },

      // Register action
      register: (userData) => {
        set({
          user: userData,
          isAuthenticated: true,
          token: `token_${Date.now()}`,
        })
      },

      // Logout action
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          token: null,
        })
      },

      // Update profile
      updateProfile: (updatedData) => {
        set((state) => ({
          user: { ...state.user, ...updatedData },
        }))
      },

      // Set user data
      setUser: (userData) => {
        set({
          user: userData,
          isAuthenticated: true,
        })
      },
    }),
    {
      name: 'auth-store',
      storage: localStorage,
    }
  )
)
