import Input from '@/components/Input.component'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Category } from '@/model/Category.model'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CategoryInfer, categorySchema } from '../schema/categorySchema'

interface AlertCategoryProps {
  category: Category | null
  isOpen: boolean
  closeModal: () => void
  actionCreate: (data: CategoryInfer) => void
  actionUpdate: (data: Category) => void
}

const CategoryModal = ({
  category,
  isOpen,
  closeModal,
  actionCreate,
  actionUpdate
}: AlertCategoryProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CategoryInfer>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category?.name || '',
      imageUrl: category?.imageUrl || '',
      status: category?.status || false,
      id: category?.id || 0
    }
  })

  const onSubmit = (data: CategoryInfer) => {
    if (category) {
      actionUpdate(data)
    } else {
      actionCreate({ ...data, status: true })
    }
    closeModal()
  }

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center'>
              {category ? 'Editar Categoria' : 'Crear Categoria'}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <Input hookForm={register('name')} label='Nombre' error={errors?.name} />
          <Input
            hookForm={register('imageUrl')}
            label='Url imagen'
            error={errors?.imageUrl}
          />
          <div className={`flex items-center space-x-2 ${!category ? 'hidden' : ''}`}>
            <label htmlFor='status'>Activo</label>
            <input type='checkbox' {...register('status')} />
          </div>
          <AlertDialogFooter>
            <Button variant='secondary' onClick={closeModal}>
              Cancelar
            </Button>
            <Button type='submit'>{category ? 'Editar' : 'Crear'}</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CategoryModal
