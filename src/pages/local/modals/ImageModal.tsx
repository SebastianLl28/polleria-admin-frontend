import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader
} from '@/components/ui/alert-dialog'

interface ImageModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  imageUrl: string
}

const ImageModal = ({ isOpen, setIsOpen, imageUrl }: ImageModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className='max-w-md'>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <img
              src={imageUrl}
              className='mx-auto w-11/12 max-w-72 rounded object-cover '
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Cerrar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ImageModal
