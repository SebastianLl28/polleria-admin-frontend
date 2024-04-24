import { baseApi } from '@/api/baseApi.api'
import { Category } from '@/model/Category.model'
import { Pagination } from '@/model/Pagination.model'

export const getAllCategories = async () => {
  return await baseApi.get<Pagination<Category>>('/categories').then(res => res.data)
}

export const postCategory = async (category: Omit<Category, 'status' | 'id'>) => {
  return await baseApi.post('/categories', category).then(res => res.data)
}

export const putCategory = async (category: Category) => {
  return await baseApi.put(`/categories/${category.id}`, category).then(res => res.data)
}
