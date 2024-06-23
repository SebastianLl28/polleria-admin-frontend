import { Store } from '@/model/Store.model'
import { useState } from 'react'
import ViewModal from '../modals/ViewModal'

const useViewModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [store, setStore] = useState<null | Store>(null)

  const openModal = (store: Store) => {
    setStore(store)
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
    setStore(null)
  }

  const ViewModalContainer = () => (
    <ViewModal isOpen={isOpenModal} close={closeModal} store={store} />
  )

  return {
    openModal,
    ViewModalContainer
  }
}

export default useViewModal
