import Input from '@/components/Input.component'
import InputMultiSelect from '@/components/InputMultiSelect'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useGetAllCategories } from '@/hooks/categories.hook'
import { Category } from '@/model/Category.model'
import { Pagination } from '@/model/Pagination.model'
import { Product } from '@/model/Product.model'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { ProductSchema, TProductSchema } from '../schema/product.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '@/components/ui/textarea'

interface ProductFormModalProps {
  isOpen: boolean
  closeModal: () => void
  product: Product | null
  addProduct: (product: Omit<Product, 'status' | 'valoration' | 'id'>) => void
}

const ProductFormModal = ({
  isOpen,
  closeModal,
  product,
  addProduct
}: ProductFormModalProps) => {
  const { data, isLoading } = useGetAllCategories()

  const [categoriesSelect, setCategoriesSelect] = useState([])

  const transformData = (data: Pagination<Category>) => {
    return data.content.map(category => ({
      value: category.name,
      label: category.name
    }))
  }

  const { register, handleSubmit, control, clearErrors, setValue } =
    useForm<TProductSchema>({
      resolver: zodResolver(ProductSchema)
    })

  const onSubmit = (data: TProductSchema) => {
    addProduct(data)
  }

  const { fields, append } = useFieldArray({
    control,
    name: 'galleryImages' as never,
    keyName: 'id'
  })

  useEffect(() => {
    if (categoriesSelect.length === 0) return
    setValue(
      'categoryList',
      categoriesSelect.map(({ value }) => value)
    )
    clearErrors('categoryList')
  }, [categoriesSelect, setValue, clearErrors])

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AlertDialogTitle className='text-center text-xl'>
            {product ? 'Editar producto' : 'Crear producto'}
          </AlertDialogTitle>

          <Input hookForm={register('name')} label='Nombre' />
          <Textarea
            {...register('description')}
            placeholder='Description'
            className='max-h-56 bg-white'
          />
          <Input
            hookForm={register('price', { valueAsNumber: true })}
            label='Precio'
            type='number'
          />
          <Input hookForm={register('cardImage')} label='Imagen de tarjeta' />
          <Input hookForm={register('detailImage')} label='Imagen de detalle' />
          {/* <Input hookForm={register('galleryImages')} label='Imagenes de galeria' /> */}
          {fields.map((field, index) => (
            <div key={field.id}>
              <Input
                hookForm={register(`galleryImages.${index}`)}
                label='Imagenes de galeria'
              />
            </div>
          ))}
          <Button onClick={() => append('')}>Agregar</Button>

          <InputMultiSelect
            value={categoriesSelect}
            onChange={setCategoriesSelect}
            options={data ? transformData(data) : []}
            labelledBy='Categorías'
            valueRenderer={selected =>
              selected.length > 0
                ? selected.map(({ label }) => label).join(', ')
                : 'Seleccione una Categoria'
            }
            isLoading={isLoading}
          />

          <AlertDialogFooter>
            <Button onClick={closeModal}>Cancelar</Button>
            <Button type='submit'>Crear</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ProductFormModal
