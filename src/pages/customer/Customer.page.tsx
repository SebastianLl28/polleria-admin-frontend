import { useState } from 'react'
import { useGetAllCustomer } from '@/hooks/customer.hook'
import Header from './sections/Header'
import Cards from './views/Cards'
import Table from '@/components/table/Table'
import { IActions, IHeader } from '@/components/table/interfaces/ITable'
import { useDelete, useDialog } from './hook'

const handleClick = (item: string) => {
  console.log(item)
}

const CustomerPage = () => {
  const { data, isLoading, isSuccess } = useGetAllCustomer()

  const [isCardView, setIsCardView] = useState(false)

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

  const { DeleteAlert, handleDelete } = useDelete()
  const { ModalCustomer, openDialog } = useDialog()

  const actions: IActions[] = [
    {
      name: 'Ver',
      action: openDialog
    },
    {
      name: 'Desactivar',
      action: handleDelete,
      variant: 'destructive'
    }
  ]

  return (
    <main className='space-y-12 p-12'>
      <Header isCardView={isCardView} setIsCardView={setIsCardView} />
      {!isLoading &&
        isSuccess &&
        data.content.length > 0 &&
        (isCardView ? (
          <Cards data={data} actions={actions} />
        ) : (
          <Table header={headers} data={data} actions={actions} />
        ))}
      <DeleteAlert />
      <ModalCustomer />
    </main>
  )
}

export default CustomerPage
