import { baseApi } from '@/api/baseApi.api'
import { Customer } from '@/model/Customer.model'
import { Pagination } from '@/model/Pagination.model'

export const getAllCustomer = async () => {
  return await baseApi.get<Pagination<Customer>>('/customers').then(res => res.data)
}

export const postCustomer = async (customer: Omit<Customer, 'status' | 'id'>) => {
  return await baseApi.post<Customer>('/customers', customer).then(res => res.data)
}

export const putCustomer = async (customer: Omit<Customer, 'password'>) => {
  return await baseApi
    .put<Customer>(`/customers/${customer.id}`, customer)
    .then(res => res.data)
}
