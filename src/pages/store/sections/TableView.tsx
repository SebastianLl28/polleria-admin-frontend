import { IActions, IHeader, Table } from '@/components/table'
import { Pagination } from '@/model/Pagination.model'
import { Store } from '@/model/Store.model'
import useViewAssociatedProduct from '../hooks/useViewAssociatedProduct'

interface TableViewProps {
  data: Pagination<Store>
  action: IActions<Store>[]
}

const TableView = ({ data, action }: TableViewProps) => {
  const { ModalAssociatedProducs, handleOpen } = useViewAssociatedProduct()

  const header: IHeader<Store>[] = [
    {
      key: 'name',
      label: 'Nombre',
      overflow: 'visible',
      size: 0.9,
      orderColumn: true,
      onSortAsc: () => console.log('sort asc name'),
      onSortDesc: () => console.log('sort desc name'),
      onSortRemove: () => console.log('sort remove name'),
      render: ({ name }: Store) => {
        return (
          <span className='line-clamp-1' title={name}>
            {name}
          </span>
        )
      }
    },
    {
      key: 'address',
      label: 'Dirección',
      overflow: 'visible',
      size: 1.5,
      render: ({ address }: Store) => {
        return (
          <span className='line-clamp-1' title={address}>
            {address}
          </span>
        )
      }
    },
    {
      key: 'phone',
      label: 'Teléfono',
      overflow: 'visible',
      size: 0.8
    },
    {
      key: 'status',
      label: 'Estado',
      overflow: 'visible',
      size: 0.5,
      render: ({ status }: Store) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${status ? 'bg-green-500' : 'bg-red-500'} `}
          >
            {status ? 'Activo' : 'Inactivo'}
          </span>
        )
      }
    }
  ]

  return (
    <>
      <Table header={header} data={data} actions={action} rowClick={handleOpen} />
      <ModalAssociatedProducs />
    </>
  )
}

export default TableView
