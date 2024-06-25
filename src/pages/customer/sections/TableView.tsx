import { IActions, IHeader, Table } from '@/components/table'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hook'
import { Customer } from '@/model/Customer.model'
import { Pagination } from '@/model/Pagination.model'
import { CustomerFilterState, setFilter } from '@/store/customerFilterSlice.store'

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
      orderColumn: true
    },
    {
      key: 'lastname',
      label: 'Apellido',
      overflow: 'visible',
      size: 2.5,
      orderColumn: true
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
      render: ({ status }: Customer) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${status === 'ACTIVE' && 'bg-green-500'} ${status === 'UNVERIFIED' && 'bg-yellow-500'} ${status === 'BLOCKED' && 'bg-red-500'}`}
          >
            {status === 'ACTIVE' && 'Activo'}
            {status === 'BLOCKED' && 'Inactivo'}
            {status === 'UNVERIFIED' && 'No verificado'}
          </span>
        )
      },
      size: 2
    }
  ]

  const customerFilter = useAppSelector(state => state.customerFilter)
  console.log(customerFilter)
  const dispatch = useAppDispatch()

  return (
    <Table
      header={headers}
      data={data}
      actions={actions}
      filter={customerFilter}
      setFilter={(customer: Partial<CustomerFilterState>) =>
        dispatch(setFilter(customer))
      }
    />
  )
}

export default TableView
