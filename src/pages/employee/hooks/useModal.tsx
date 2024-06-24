import { User } from '@/model/User.model'
import { useState } from 'react'
import { EmployeeModal } from '../modals'

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [user, setUser] = useState<null | Omit<User, 'password'>>(null)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleOpen = (user: Omit<User, 'password'>) => {
    setUser(user)
    setIsOpenModal(true)
  }

  const toggleEdit = () => {
    setIsEdit(edit => !edit)
  }

  const closeModal = (open: boolean) => {
    setIsOpenModal(open)
    setIsEdit(false)
    setUser(null)
  }

  const handleOpenEdit = (user: Omit<User, 'password'>) => {
    setUser(user)
    setIsEdit(true)
    setIsOpenModal(true)
  }

  const ModalView = (
    <EmployeeModal
      isOpen={isOpenModal}
      setIsOpen={closeModal}
      user={user}
      isEdit={isEdit}
      setIsEdit={toggleEdit}
    />
  )

  return {
    handleOpen,
    ModalView,
    handleOpenEdit
  }
}

export default useModal
