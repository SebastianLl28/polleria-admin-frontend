import { User } from '@/model/User.model'
import { useState } from 'react'
import { EmployeeModal } from '../modals'
import { usePostUser, usePutUser } from '@/hooks/user.hook'

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

  // add user
  const { mutate: mutatePost } = usePostUser()
  const createUser = (user: Omit<User, 'id' | 'password'>) => {
    mutatePost(user)
  }

  // edit user
  const { mutate: mutatePut } = usePutUser()
  const editUser = (user: Omit<User, 'password'>) => {
    mutatePut(user)
  }

  const ModalView = (
    <EmployeeModal
      isOpen={isOpenModal}
      closeModal={closeModal}
      user={user}
      modalType={modalType}
      changeToEdit={() => setModalType('edit')}
      changeToView={() => setModalType('view')}
      createUser={createUser}
      editUser={editUser}
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
