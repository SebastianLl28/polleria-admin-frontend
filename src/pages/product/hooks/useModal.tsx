import { useState } from 'react'
import ProductModal from '../modals/ProductModal'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState<number | null>(null)

  const openModal = (id: number) => {
    setId(id)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    // setId(null)
  }

  const ModalDetail = () => (
    <ProductModal idProduct={id} isOpen={isOpen} closeModal={closeModal} />
  )

  return { openModal, ModalDetail }
}

export default useModal
