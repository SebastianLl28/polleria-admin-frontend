import { User } from '@/model/User.model'
import { deleteUser, getAllUsers, postUser, putUser } from '@/services/user.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetAllUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
    refetchOnWindowFocus: false
  })

export const usePostUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['postUser'],
    mutationFn: (user: Omit<User, 'password' | 'id'>) => postUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })
}

export const usePutUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['putUser'],
    mutationFn: (user: Omit<User, 'password'>) => putUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })
}
