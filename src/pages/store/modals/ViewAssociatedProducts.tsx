import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { useAppSelector } from '@/hooks/redux.hook'

interface ViewAssociatedProductsProps {
  isOpen: boolean
  close: (state: boolean) => void
}

const ViewAssociatedProducts = ({ isOpen, close }: ViewAssociatedProductsProps) => {
  const storeSelected = useAppSelector(store => store.storeSelected)

  return (
    <AlertDialog open={isOpen} onOpenChange={close}>
      <AlertDialogContent className='min-w-fit'>
        <AlertDialogTitle className='text-center'>
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription className='text-primary'>
          <h2 className='mb-2 text-center text-lg font-semibold'>
            Acá se va a agregar un listado de los productos que se están relacionados con
            el local
          </h2>
          {JSON.stringify(storeSelected, null, 2)}
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ViewAssociatedProducts
