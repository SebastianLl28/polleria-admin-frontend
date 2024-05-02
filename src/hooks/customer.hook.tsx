import { getAllCustomer, postCustomer, putCustomer } from '@/services/customer.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useGetAllCustomer = () =>
  useQuery({
    queryKey: ['customer'],
    queryFn: getAllCustomer,
    refetchOnWindowFocus: false
  })

export const usePostCustomer = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['postCustomer'],
    mutationFn: postCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['customer']
      })
    }
  })
}

export const usePutCustomer = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['putCustomer'],
    mutationFn: putCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['customer']
      })
      toast.success('Cliente actualizado correctamente.')
    },
    onError: () => {
      toast.error('Error al atualizar el cliente. Intente nuevamente.')
    }
  })
}
