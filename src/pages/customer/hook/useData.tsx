import { useState } from 'react'
import { CustomerStatus } from '@/model/Customer.model'
import { useGetAllCustomer } from '@/hooks/customer.hook'
// import { Pagination } from '@/model/Pagination.model'
// import { Customer } from '@/model/Customer.model'

const useData = () => {
  // const [customers, setCustomers] = useState<Pagination<Customer> | undefined>()

  const { data, isLoading, isSuccess } = useGetAllCustomer()

  const [filter, setFilter] = useState<undefined | keyof typeof CustomerStatus>()

  // backend

  return {
    data,
    isLoading,
    isSuccess,
    filter,
    setFilter
  }
}

export default useData
