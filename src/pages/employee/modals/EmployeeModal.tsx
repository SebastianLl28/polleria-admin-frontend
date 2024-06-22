import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { User } from '@/model/User.model'

interface EmployeeModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  user: Omit<User, 'password'> | null
}

const EmployeeModal = ({ isOpen, setIsOpen, user }: EmployeeModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className='max-w-md'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-center'>Empleado</AlertDialogTitle>
          <AlertDialogDescription className='space-y-4 text-primary [&>div>p]:font-semibold [&>div]:space-y-1'>
            <div>
              <p>Nombre</p>
              <Input value={user?.fullname} />
            </div>
            <div>
              <p>Nombre de Usuario</p>
              <Input value={user?.username} />
            </div>
            <div className='flex items-center gap-2'>
              <p>Estado: </p>
              <Badge variant={user?.status ? 'success' : 'destructive'} size='lg'>
                {user?.status ? 'Activo' : 'Inactivo'}
              </Badge>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Cerrar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default EmployeeModal
