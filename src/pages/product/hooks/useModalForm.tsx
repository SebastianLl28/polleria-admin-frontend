import { useState } from 'react'
import ProductFormModal from '../modals/ProductFormModal'
import { Product } from '@/model/Product.model'
import { usePostProduct } from '@/hooks/products.hook'

const useModalForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)
  const { mutate } = usePostProduct()

  const handleOpen = (product: Product | null) => {
    setProduct(product)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setProduct(null)
  }

  const addProduct = (product: Omit<Product, 'status' | 'valoration' | 'id'>) => {
    mutate(product)
    handleClose()
  }

  const Modal = () => (
    <ProductFormModal
      isOpen={isOpen}
      closeModal={handleClose}
      product={product}
      addProduct={addProduct}
    />
  )

  return { Modal, handleOpen }
}

export default useModalForm
