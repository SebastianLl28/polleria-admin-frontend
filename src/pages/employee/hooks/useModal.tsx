import { User } from '@/model/User.model'
import { useState } from 'react'
import { EmployeeModal } from '../modals'

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [user, setUser] = useState<null | Omit<User, 'password'>>(null)
  // const [isEdit, setIsEdit] = useState<boolean>(false)
  const [modalType, setModalType] = useState<'edit' | 'view' | 'add'>('view')

  const handleOpenView = (user: Omit<User, 'password'>) => {
    setModalType('view')
    setUser(user)
    setIsOpenModal(true)
  }

  const handleOpenEdit = (user: Omit<User, 'password'>) => {
    setUser(user)
    setModalType('edit')
    setIsOpenModal(true)
  }

  const handleOpenAdd = () => {
    setUser(null)
    setModalType('add')
    setIsOpenModal(true)
  }

  const closeModal = (open: boolean) => {
    setIsOpenModal(open)
    setUser(null)
  }

  const ModalView = (
    <EmployeeModal
      isOpen={isOpenModal}
      close={closeModal}
      user={user}
      modalType={modalType}
      changeToEdit={() => setModalType('edit')}
      changeToView={() => setModalType('view')}
    />
  )

  return {
    handleOpenView,
    ModalView,
    handleOpenEdit,
    handleOpenAdd
  }
}

export default useModal
