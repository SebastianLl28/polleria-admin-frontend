import { getAllCustomer, postCustomer } from '@/services/customer.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetAllCustomer = () =>
  useQuery({
    queryKey: ['customer'],
    queryFn: getAllCustomer,
    refetchOnWindowFocus: false
  })

export const usePostCustomer = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['customer'],
    mutationFn: postCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['customer']
      })
    }
  })
}
