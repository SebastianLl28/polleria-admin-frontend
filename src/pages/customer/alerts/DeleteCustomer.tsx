import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { buttonVariants } from '@/components/ui/button'
import { Customer } from '@/model/Customer.model'

interface DeleteCustomerProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  customer: Customer | null
  actionDelete: (id: Customer) => void
}

const DeleteCustomer = ({
  isOpen,
  setIsOpen,
  customer,
  actionDelete
}: DeleteCustomerProps) => {
  const handleDelete = () => {
    if (!customer) {
      throw new Error('Customer is required')
    }
    actionDelete(customer)
    setIsOpen(false)
  }

  return (
    <AlertDialog onOpenChange={setIsOpen} open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro de eliminar a este usuario?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente su cuenta y
            eliminará sus datos de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={buttonVariants({ variant: 'destructive' })}
            onClick={handleDelete}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteCustomer
