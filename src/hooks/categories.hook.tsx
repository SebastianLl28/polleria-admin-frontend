import {
  getAllCategories,
  postCategory,
  putCategory
} from '@/services/categories.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetAllCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    refetchOnWindowFocus: false
  })

export const usePostCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['postCategory'],
    mutationFn: postCategory,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories']
      })
    }
  })
}

export const usePutCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['putCategory'],
    mutationFn: putCategory,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories']
      })
    }
  })
}
