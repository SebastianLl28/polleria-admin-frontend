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
import { User } from '@/model/User.model'

interface EmployeeModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  user: Omit<User, 'password'> | null
}

const EmployeeModal = ({ isOpen, setIsOpen, user }: EmployeeModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-center'>Empleado</AlertDialogTitle>
          <AlertDialogDescription>{JSON.stringify(user, null, 2)}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default EmployeeModal
