import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

interface ConfirmationModalProps {
  isOpen: boolean
  close: (open: boolean) => void
  deleteUser: () => void
}

const ConfirmationModal = ({ close, isOpen, deleteUser }: ConfirmationModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={close}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-center'>
            Confirmación de eliminación
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          ¿Está seguro que desea eliminar este usuario?, esta acción no se puede deshacer.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <Button variant='outline' onClick={() => close(false)}>
            Cancel
          </Button>
          <Button variant='destructive' onClick={deleteUser}>
            Aceptar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmationModal
