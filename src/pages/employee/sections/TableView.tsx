import { IActions, IHeader, Table } from '@/components/table'
import { User } from '@/model/User.model'

interface TableViewProps {
  data: User[]
  actions: IActions[]
}

const TableView = ({ data, actions }: TableViewProps) => {
  const headers: IHeader[] = [
    {
      key: 'id',
      label: 'ID',
      overflow: 'visible',
      size: 0.4
    },
    {
      key: 'fullname',
      label: 'Nombre',
      overflow: 'visible',
      size: 1
    },
    {
      key: 'username',
      label: 'Nombre de usuario',
      overflow: 'visible',
      size: 1
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
    <div>
      <Table header={headers} data={data} actions={actions} />
    </div>
  )
}

export default TableView
