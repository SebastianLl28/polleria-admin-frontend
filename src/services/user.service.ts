import { baseApi } from '@/api/baseApi.api'
// import { Pagination } from '@/model/Pagination.model'
import { User } from '@/model/User.model'

interface UserService extends Omit<User, 'password'> {}

export const getAllUsers = async () =>
  await baseApi.get<UserService[]>('/users').then(res => res.data)

export const putUser = async (user: UserService) =>
  await baseApi.put(`/users/${user.id}`, user)

export const deleteUser = async (id: number) => await baseApi.delete(`/users/${id}`)
