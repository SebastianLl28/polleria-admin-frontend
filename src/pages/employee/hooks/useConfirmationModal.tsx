import { useState } from 'react'
import { ConfirmationModal as ConfirmationModalComponent } from '../modals'
import { useDeleteUser } from '@/hooks/user.hook'

const useConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState<null | number>(null)

  const { mutate: mutateDelete } = useDeleteUser()

  const openConfirmationModal = (id: number) => {
    setId(id)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setId(null)
  }

  const deleteUser = () => {
    if (id) {
      mutateDelete(id)
      closeModal()
    }
  }

  const ConfirmationModal = () => (
    <ConfirmationModalComponent
      close={setIsOpen}
      isOpen={isOpen}
      deleteUser={deleteUser}
    />
  )

  return {
    ConfirmationModal,
    openConfirmationModal
  }
}

export default useConfirmationModal
