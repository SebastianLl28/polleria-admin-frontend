import { useGetAllCustomer } from '@/hooks/customer.hook'
import { IHeader } from './interface/IHeader'
import Header from './sections/Header'
import Table from './table/Table'
import useDelete from './hook/useDelete'
import { Customer } from '@/model/Customer.model'

const handleClick = (item: string) => {
  console.log(item)
}

const CustomerPage = () => {
  const { data, isLoading, isSuccess } = useGetAllCustomer()
  const headers: IHeader[] = [
    {
      key: 'id',
      label: 'ID',
      overflow: 'hidden',
      size: 1
    },
    {
      key: 'name',
      label: 'Name',
      overflow: 'visible',
      size: 2.5,
      action: handleClick
    },
    {
      key: 'lastname',
      label: 'Apellido',
      overflow: 'visible',
      size: 2.5
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
      render: (value: boolean) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${value ? 'bg-green-500' : 'bg-destructive'}`}
          >
            {value ? 'Activo' : 'Inactivo'}
          </span>
        )
      },
      size: 2
    }
  ]

  const handleEdit = (customer: Customer) => {
    alert('Edit ' + customer.id)
  }

  const { DeleteAlert, handleDelete } = useDelete()

  const actions = [
    {
      name: 'Editar',
      action: handleEdit
    },
    {
      name: 'Eliminar',
      action: handleDelete
    }
  ]

  return (
    <main className='space-y-12 p-12'>
      <Header />
      {!isLoading && isSuccess && data.content.length > 0 && (
        <Table header={headers} data={data} actions={actions} />
      )}
      <DeleteAlert />
    </main>
  )
}

export default CustomerPage
