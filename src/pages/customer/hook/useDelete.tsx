import { useState } from 'react'
import DeleteCustomer from '../alerts/DeleteCustomer'
import { Customer } from '@/model/Customer.model'

const useDelete = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [customer, setCustomer] = useState<Customer | null>(null)

  const handleDelete = (customer: Customer) => {
    setCustomer(customer)
    setIsOpen(true)
  }

  const actionDelete = (customer: Customer) => {
    console.log('Delete customer', customer)
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
