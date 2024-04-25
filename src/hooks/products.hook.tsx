import { getAllProducts, getProductById } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

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
