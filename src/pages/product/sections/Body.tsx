import Table from '@/components/table/Table'
import { IActions, IHeader } from '@/components/table/interfaces/ITable'
import { useGetAllProducts } from '@/hooks/products.hook'
import { Product } from '@/model/Product.model'
import { Star } from 'lucide-react'
import useModal from '../hooks/useModal'

const Body = () => {
  const { data, isLoading, isSuccess } = useGetAllProducts()

  const header: IHeader<Product>[] = [
    {
      key: 'id',
      label: 'ID',
      overflow: 'hidden',
      size: 1.5
    },
    {
      key: 'name',
      label: 'Nombre',
      overflow: 'visible',
      size: 1
    },
    {
      key: 'description',
      label: 'Descripción',
      overflow: 'visible',
      size: 2,
      render: ({ description }: Product) => {
        return (
          <span className='line-clamp-1' title={description}>
            {description}
          </span>
        )
      }
    },
    {
      key: 'price',
      label: 'Precio',
      overflow: 'visible',
      size: 1,
      render: ({ price }: Product) => {
        return <span>S/.{price}</span>
      }
    },
    {
      key: 'cardImage',
      label: 'Imagen',
      overflow: 'visible',
      size: 0.8,
      render: ({ cardImage }: Product) => {
        return <img src={cardImage} alt='product' className='h-auto w-8 object-cover' />
      }
    },
    {
      key: 'valoration',
      label: 'Valoración',
      overflow: 'visible',
      size: 1,
      render: ({ valoration }: Product) => {
        return (
          <p className='flex gap-2'>
            <span>{valoration}</span> <Star className='text-yellow-500' />
          </p>
        )
      }
    },
    {
      key: 'status',
      label: 'Estado',
      size: 1,
      overflow: 'visible',
      render: ({ status }: Product) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${status ? 'bg-green-500' : 'bg-destructive'}`}
          >
            {status ? 'Activo' : 'Inactivo'}
          </span>
        )
      }
    }
  ]

  const actions: IActions<Product>[] = [
    {
      name: 'Ver Detalles',
      action: (product: Product) => openModal(product.id)
    },
    {
      name: 'Agregar Stock',
      action: (product: Product) => console.log('Agregar Stock', product.id)
    }
  ]

  const { ModalDetail, openModal } = useModal()

  return (
    <section>
      {!isLoading && isSuccess && <Table data={data} header={header} actions={actions} />}

      <ModalDetail />
    </section>
  )
}

export default Body
