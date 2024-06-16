import { useGetAllCustomer } from '@/hooks/customer.hook'

const useData = () => {
  const { data, isLoading, isSuccess } = useGetAllCustomer()
  // TODO: Filter by backend

  return {
    data,
    isLoading,
    isSuccess
  }
}

export default useData
