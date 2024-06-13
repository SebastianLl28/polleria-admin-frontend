import { useState } from 'react'
import { IActions, IHeader, Table } from '@/components/table'
import { useDelete, useDialog, useData } from './hook'
import { Header, Cards } from './sections'

const CustomerPage = () => {
  const { data, filter, isLoading, isSuccess, setFilter } = useData()

  const [isCardView, setIsCardView] = useState(false)
  const { DeleteAlert, handleDelete } = useDelete()
  const { ModalCustomer, openDialog } = useDialog()

  const handleClick = (item: string) => {
    console.log(item)
  }

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
      <Header
        isCardView={isCardView}
        setIsCardView={setIsCardView}
        setFilter={setFilter}
        filter={filter}
        data={data?.content || []}
      />
      {!isLoading &&
        isSuccess &&
        data &&
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
