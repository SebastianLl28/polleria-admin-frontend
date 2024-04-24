import { useState } from 'react'
import { Category } from '@/model/Category.model'
import CategoryModal from '../modals/CategoryModal'
import { usePostCategory, usePutCategory } from '@/hooks/categories.hook'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState<Category | null>(null)

  const { mutate: mutateCreate } = usePostCategory()
  const { mutate: mutateUpdate } = usePutCategory()

  const openModal = (category: Category | null) => {
    setIsOpen(true)
    setCategory(category)
  }

  const closeModal = () => {
    setIsOpen(false)
    setCategory(null)
  }

  const Modal = () => (
    <CategoryModal
      category={category}
      isOpen={isOpen}
      closeModal={closeModal}
      actionCreate={mutateCreate}
      actionUpdate={mutateUpdate}
    />
  )

  return { Modal, openModal }
}

export default useModal
