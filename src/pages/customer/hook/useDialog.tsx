import { useState } from 'react'
import { Customer } from '@/model/Customer.model'
import { CustomerAlert } from '../modals'

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [customer, setCustomer] = useState<Customer | null>(null)

  const closeDialog = () => {
    setCustomer(null)
    setIsOpen(false)
  }

  const openDialog = (customer: Customer) => {
    setCustomer(customer)
    setIsOpen(true)
  }

  const ModalCustomer = () => (
    <CustomerAlert isOpen={isOpen} closeDialog={closeDialog} customer={customer} />
  )

  return {
    ModalCustomer,
    openDialog
  }
}

export default useDialog
