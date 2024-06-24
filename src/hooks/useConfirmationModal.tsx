import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface useConfirmationModalProps {
  title: string
  description: string
  textConfirm?: string
  actionConfirm: () => void
  variant?: 'default' | 'success' | 'warning'
}

const useConfirmationModal = ({
  title,
  description,
  textConfirm,
  actionConfirm,
  variant = 'default'
}: useConfirmationModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModalConfirmation = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleConfirm = () => {
    actionConfirm()
    closeModal()
  }

  const ModalConfirmation = () => {
    return (
      <AlertDialog open={isOpen} onOpenChange={closeModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center'>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant='outline' onClick={closeModal} type='button'>
              Cancelar
            </Button>
            <Button onClick={handleConfirm} variant={variant} type='button'>
              {textConfirm ? textConfirm : 'Continuar'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  return {
    openModalConfirmation,
    ModalConfirmation
  }
}

export default useConfirmationModal
