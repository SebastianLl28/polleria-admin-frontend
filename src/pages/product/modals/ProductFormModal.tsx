import InputMultiSelect from '@/components/InputMultiSelect'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Product } from '@/model/Product.model'

interface ProductFormModalProps {
  isOpen: boolean
  closeModal: () => void
  product: Product | null
}

const ProductFormModal = ({ isOpen, closeModal, product }: ProductFormModalProps) => {
  const options = [
    {
      value: '1',
      label: 'Option 1'
    },
    {
      value: '2',
      label: 'Option 2'
    },
    {
      value: '3',
      label: 'Option 4'
    }
  ]

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogTitle className='text-center text-xl'>
          {product ? 'Editar producto' : 'Crear producto'}
        </AlertDialogTitle>

        <InputMultiSelect options={options} label='Selecciona una categoria' />

        <AlertDialogFooter>
          <Button onClick={closeModal}>Cancelar</Button>
          <Button onClick={closeModal}>Crear</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ProductFormModal
