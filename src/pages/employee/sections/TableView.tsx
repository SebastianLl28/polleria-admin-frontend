import { IActions, IHeader, Table } from '@/components/table'
import { User } from '@/model/User.model'

interface TableViewProps {
  data: Omit<User, 'password'>[]
  actions: IActions<User>[]
}

const TableView = ({ data, actions }: TableViewProps) => {
  const headers: IHeader<User>[] = [
    {
      key: 'fullname',
      label: 'Nombre',
      overflow: 'visible',
      size: 1,
      orderColumn: true,
      onSortAsc: () => console.log('Sort Asc by name'),
      onSortDesc: () => console.log('Sort Desc by name'),
      onSortRemove: () => console.log('Remove Sort by name')
    },
    {
      key: 'username',
      label: 'Nombre de usuario',
      overflow: 'visible',
      size: 1,
      orderColumn: true,
      onSortAsc: () => console.log('Sort Asc by username'),
      onSortDesc: () => console.log('Sort Desc by username'),
      onSortRemove: () => console.log('Remove Sort by username')
    },
    {
      key: 'status',
      label: 'Estado',
      overflow: 'visible',
      size: 1,
      render: ({ status }: User) => {
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
    <div>
      <Table header={headers} data={data} actions={actions} />
    </div>
  )
}

export default TableView
