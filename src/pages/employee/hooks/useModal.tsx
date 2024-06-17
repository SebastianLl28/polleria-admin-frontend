import { User } from '@/model/User.model'
import { useState } from 'react'
import { EmployeeModal } from '../modals'

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [user, setUser] = useState<null | Omit<User, 'password'>>(null)

  const handleOpen = (user: Omit<User, 'password'>) => {
    setUser(user)
    setIsOpenModal(true)
  }

  const ModalView = () => (
    <EmployeeModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} user={user} />
  )

  return {
    handleOpen,
    ModalView
  }
}

export default useModal
