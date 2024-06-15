import { useQuery } from '@tanstack/react-query'
import { getAllStores } from '@/services/store.service'

export const useGetAllStores = () =>
  useQuery({
    queryKey: ['stores'],
    queryFn: getAllStores,
    refetchOnWindowFocus: false
  })
