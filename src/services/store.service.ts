import { baseApi } from '@/api/baseApi.api'
import { Pagination } from '@/model/Pagination.model'
import { Store } from '@/model/Store.model'

export const getAllStores = async () =>
  baseApi.get<Pagination<Store>>('/stores').then(res => res.data)
