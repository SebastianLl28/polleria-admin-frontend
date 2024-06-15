import { getAllUsers } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useGetAllUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
    refetchOnWindowFocus: false
  })
