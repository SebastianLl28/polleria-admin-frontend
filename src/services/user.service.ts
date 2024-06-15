import { baseApi } from '@/api/baseApi.api'
// import { Pagination } from '@/model/Pagination.model'
import { User } from '@/model/User.model'

export const getAllUsers = async () =>
  await baseApi.get<User[]>('/users').then(res => res.data)
