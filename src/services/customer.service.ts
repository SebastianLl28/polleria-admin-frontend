import { baseApi } from '@/api/baseApi.api'
import { Customer } from '@/model/Customer.model'
import { Pagination } from '@/model/Pagination.model'
import { CustomerFilterState } from '@/store/customerFilterSlice.store'

export const getAllCustomer = async (filter: CustomerFilterState) => {
  const { orderBy, ...newfilter } = filter

  return await baseApi
    .get<Pagination<Customer>>('/customers', {
      params: {
        ...newfilter,
        ...(orderBy && orderBy.order && { sort: `${orderBy.key},${orderBy.order}` })
      }
    })
    .then(res => res.data)
}
