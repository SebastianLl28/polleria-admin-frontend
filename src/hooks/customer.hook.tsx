import { getAllCustomer } from '@/services/customer.service'
import { useQuery } from '@tanstack/react-query'

export const useGetAllCustomer = () =>
  useQuery({
    queryKey: ['customer'],
    queryFn: getAllCustomer,
    refetchOnWindowFocus: false
  })
