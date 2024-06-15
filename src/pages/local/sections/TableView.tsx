import { IActions, IHeader, Table } from '@/components/table'
import { Pagination } from '@/model/Pagination.model'
import { Store } from '@/model/Store.model'
import { useState } from 'react'
import ImageModal from '../modals/ImageModal'

interface TableViewProps {
  data: Pagination<Store>
  action: IActions[]
}

const TableView = ({ data, action }: TableViewProps) => {
  const [isModalImageOpen, setIsModalImageOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const header: IHeader[] = [
    {
      key: 'id',
      label: 'ID',
      overflow: 'visible',
      size: 0.5
    },
    {
      key: 'name',
      label: 'Nombre',
      overflow: 'visible',
      size: 1
    },
    {
      key: 'address',
      label: 'Dirección',
      overflow: 'visible',
      size: 1,
      render: (value: string) => {
        return (
          <span className='line-clamp-1' title={value}>
            {value}
          </span>
        )
      }
    },
    {
      key: 'phone',
      label: 'Teléfono',
      overflow: 'visible',
      size: 1
    },
    {
      key: 'imageUrl',
      label: 'Imagen',
      overflow: 'visible',
      size: 1,
      render: (value: string) => {
        return (
          <img
            className='m-0 h-12 w-auto cursor-pointer object-cover'
            src={value}
            alt='store'
          />
        )
      },
      action(item: string) {
        setImageUrl(item)
        setIsModalImageOpen(true)
      }
    },
    {
      key: 'status',
      label: 'Estado',
      overflow: 'visible',
      size: 1,
      render: (value: boolean) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${value ? 'bg-green-500' : 'bg-red-500'} `}
          >
            {value ? 'Activo' : 'Inactivo'}
          </span>
        )
      }
    }
  ]

  return (
    <>
      <Table header={header} data={data} actions={action} />
      <ImageModal
        isOpen={isModalImageOpen}
        setIsOpen={setIsModalImageOpen}
        imageUrl={imageUrl}
      />
    </>
  )
}

export default TableView
