import { useState } from 'react'
import ViewAssociatedProducts from '../modals/ViewAssociatedProducts'
import { Store } from '@/model/Store.model'
import { useAppDispatch } from '@/hooks/redux.hook'
import { setStore, clear } from '@/store/storeSelectedSlice.store'

const useViewAssociatedProduct = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useAppDispatch()

  const handleOpen = (store: Store) => {
    dispatch(setStore(store))
    setIsOpen(true)
  }

  const handleClose = (state: boolean) => {
    dispatch(clear())
    setIsOpen(state)
  }

  const ModalAssociatedProducs = () => (
    <ViewAssociatedProducts close={handleClose} isOpen={isOpen} />
  )

  return {
    handleOpen,
    ModalAssociatedProducs
  }
}

export default useViewAssociatedProduct
