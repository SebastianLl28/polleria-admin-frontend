import { Category } from '@/model/Category.model'
import { create } from 'zustand'

interface CategoryStore {
  category: Category | null
  setCategory: (category: Category) => void
}

export const useCategoryStore = create<CategoryStore>(set => ({
  category: null,
  setCategory: category => set({ category })
}))
