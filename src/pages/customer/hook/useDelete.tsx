import { useState } from 'react'
import DeleteCustomer from '../alerts/DeleteCustomer'
import { Customer } from '@/model/Customer.model'
import { usePutCustomer } from '@/hooks/customer.hook'

const useDelete = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [customer, setCustomer] = useState<Customer | null>(null)

  const handleDelete = (customer: Customer) => {
    setCustomer(customer)
    setIsOpen(true)
  }

  const { mutate } = usePutCustomer()

  const actionDelete = (customer: Omit<Customer, 'password'>) => {
    const data = { ...customer, status: 'BLOCKED' } as Omit<Customer, 'password'>
    mutate(data)
  }

  const DeleteAlert = () => {
    return (
      <DeleteCustomer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customer={customer}
        actionDelete={actionDelete}
      />
    )
  }

  return { handleDelete, DeleteAlert }
}

export default useDelete
