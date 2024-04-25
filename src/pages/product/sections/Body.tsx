import Table from '@/components/table/Table'
import { IActions, IHeader } from '@/components/table/interfaces/ITable'
import { useGetAllProducts } from '@/hooks/products.hook'
import { Product } from '@/model/Product.model'
import { Star } from 'lucide-react'
import useModal from '../hooks/useModal'

const Body = () => {
  const { data, isLoading, isSuccess } = useGetAllProducts()

  const header: IHeader[] = [
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
      render: (value: string) => {
        return (
          <span className='line-clamp-1' title={value}>
            {value}
          </span>
        )
      }
    },
    {
      key: 'price',
      label: 'Precio',
      overflow: 'visible',
      size: 1,
      render: (value: number) => {
        return <span>S/.{value}</span>
      }
    },
    {
      key: 'cardImage',
      label: 'Imagen',
      overflow: 'visible',
      size: 0.8,
      render: (value: string) => {
        return <img src={value} alt='product' className='h-auto w-8 object-cover' />
      }
    },
    {
      key: 'valoration',
      label: 'Valoración',
      overflow: 'visible',
      size: 1,
      render: (value: number) => {
        return (
          <p className='flex gap-2'>
            <span>{value}</span> <Star className='text-yellow-500' />
          </p>
        )
      }
    },
    {
      key: 'status',
      label: 'Estado',
      size: 1,
      overflow: 'visible',
      render: (value: boolean) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${value ? 'bg-green-500' : 'bg-destructive'}`}
          >
            {value ? 'Activo' : 'Inactivo'}
          </span>
        )
      }
    }
  ]

  const actions: IActions[] = [
    {
      name: 'Ver Detalles',
      action: (product: Product) => openModal(product.id)
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
