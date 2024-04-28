import { useState } from 'react'
import ProductFormModal from '../modals/ProductFormModal'
import { Product } from '@/model/Product.model'

const useModalForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)

  const handleOpen = (product: Product | null) => {
    setProduct(product)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setProduct(null)
  }

  const Modal = () => (
    <ProductFormModal isOpen={isOpen} closeModal={handleClose} product={product} />
  )

  return { Modal, handleOpen }
}

export default useModalForm
