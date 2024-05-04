import { getAllProducts, getProductById, postProduct } from '@/services/product.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false
  })

export const useGetProductById = (id: number | null) =>
  useQuery({
    queryKey: ['products', id],
    queryFn: () => {
      if (id) {
        return getProductById(id)
      }
    },
    refetchOnWindowFocus: false,
    enabled: !!id
  })

export const usePostProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['postProducts'],
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      toast.success('El producto se creo correctamente')
    },
    onError: () => {
      toast.error('Error al crear el producto')
    }
  })
}
