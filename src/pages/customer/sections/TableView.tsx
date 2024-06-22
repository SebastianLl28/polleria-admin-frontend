import { IActions, IHeader, Table } from '@/components/table'
import { Customer } from '@/model/Customer.model'
import { Pagination } from '@/model/Pagination.model'

interface TableViewProps {
  data: Pagination<Customer>
  actions: IActions<Customer>[]
}

const TableView = ({ data, actions }: TableViewProps) => {
  const headers: IHeader<Customer>[] = [
    {
      key: 'id',
      label: 'ID',
      overflow: 'hidden',
      size: 1
    },
    {
      key: 'name',
      label: 'Nombre',
      overflow: 'visible',
      size: 2.5,
      orderColumn: true,
      onSortAsc: () =>
        console.log('se ejecutó la función para ordenar ascendentemente el nombre'),
      onSortDesc: () =>
        console.log('se ejecutó la función para ordenar descendentemente el nombre'),
      onSortRemove: () =>
        console.log('se ejecutó la función para remover el orden del nombre')
    },
    {
      key: 'lastname',
      label: 'Apellido',
      overflow: 'visible',
      size: 2.5,
      orderColumn: true,
      onSortAsc: () =>
        console.log('se ejecutó la función para ordenar ascendentemente el apellido'),
      onSortDesc: () =>
        console.log('se ejecutó la función para ordenar descendentemente el apellido'),
      onSortRemove: () =>
        console.log('se ejecutó la función para remover el orden del apellido')
    },
    {
      key: 'email',
      label: 'Correo',
      overflow: 'visible',
      size: 3
    },
    {
      key: 'password',
      label: 'Contraseña',
      overflow: 'hidden',
      size: 3
    },
    {
      key: 'birthdate',
      label: 'Cumpleaños',
      overflow: 'visible',
      size: 2
    },
    {
      key: 'status',
      label: 'Estado',
      overflow: 'visible',
      render: (value: string) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${value === 'ACTIVE' && 'bg-green-500'} ${value === 'UNVERIFIED' && 'bg-yellow-500'} ${value === 'BLOCKED' && 'bg-red-500'}`}
          >
            {value === 'ACTIVE' && 'Activo'}
            {value === 'BLOCKED' && 'Inactivo'}
            {value === 'UNVERIFIED' && 'No verificado'}
          </span>
        )
      },
      size: 2
    }
  ]

  return <Table header={headers} data={data} actions={actions} />
}

export default TableView
