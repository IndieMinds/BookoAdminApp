import { create } from 'zustand';

const useAuthStore = create((set) => ({
  token: null, // Initialize token state

  // Action to save token
  setToken: (newToken) => set({ token: newToken }),

  // Action to clear token (e.g., on logout)
  clearToken: () => set({ token: null }),
}));

export default useAuthStore;
