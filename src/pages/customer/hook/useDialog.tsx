import { useState } from 'react'
import AddCustomer from '../alerts/AddCustomer'
import { usePostCustomer, usePutCustomer } from '@/hooks/customer.hook'
import { Customer } from '@/model/Customer.model'

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [customer, setCustomer] = useState<Customer | null>(null)

  const { mutate: mutatePost, isPending: isPendingPost } = usePostCustomer()
  const { mutate: mutatePut, isPending: isPendingPut } = usePutCustomer()

  const openDialogEdit = (customer: Customer) => {
    setCustomer(customer)
    setIsOpen(true)
  }

  const closeDialog = () => {
    setCustomer(null)
    setIsOpen(false)
  }

  const ModalCustomer = () => (
    <AddCustomer
      isOpen={isOpen}
      closeDialog={closeDialog}
      actionAdd={mutatePost}
      actionEdit={mutatePut}
      isPending={isPendingPost || isPendingPut}
      customer={customer}
    />
  )

  return {
    ModalCustomer,
    openDialog: () => setIsOpen(true),
    openDialogEdit
  }
}

export default useDialog
