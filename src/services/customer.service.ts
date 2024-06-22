import { baseApi } from '@/api/baseApi.api'
import { Customer } from '@/model/Customer.model'
import { Pagination } from '@/model/Pagination.model'

export const getAllCustomer = async () => {
  return await baseApi.get<Pagination<Customer>>('/customers').then(res => res.data)
}
