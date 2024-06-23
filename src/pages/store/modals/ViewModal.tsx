import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Store } from '@/model/Store.model'

interface ViewModalProps {
  isOpen: boolean
  store: Store | null
  close: () => void
}

const ViewModal = ({ isOpen, store, close }: ViewModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={close}>
      <AlertDialogContent className='min-w-fit'>
        <AlertDialogTitle className='text-center'>
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription className='text-wrap'>
          {JSON.stringify(store)}
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ViewModal
