import { getAllCustomer } from '@/services/customer.service'
import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from './redux.hook'

export const useGetAllCustomer = () => {
  const filter = useAppSelector(state => state.customerFilter)
  return useQuery({
    queryKey: ['customer', filter],
    queryFn: () => getAllCustomer(filter),
    refetchOnWindowFocus: false
  })
}
