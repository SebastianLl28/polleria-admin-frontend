import { useState } from 'react'
import { IActions } from '@/components/table'
import { useDeleteUser, useGetAllUsers } from '@/hooks/user.hook'
import { Header, CardsView, TableView } from './sections'
import { useModal } from './hooks'
import { User } from '@/model/User.model'

const EmployeePage = () => {
  const { data, isLoading, isSuccess } = useGetAllUsers()
  const [isCardView, setIsCardView] = useState(false)
  const { mutate } = useDeleteUser()

  const { handleOpen, ModalView, handleOpenEdit } = useModal()

  const handleDeleteUser = (user: Omit<User, 'password'>) => {
    mutate(user.id)
  }

  const actions: IActions<Omit<User, 'password'>>[] = [
    {
      name: 'Ver',
      action: handleOpen
    },
    {
      name: 'Editar',
      action: handleOpenEdit,
      variant: 'warning'
    },
    {
      name: 'Eliminar',
      action: handleDeleteUser,
      variant: 'destructive'
    }
  ]

  return (
    <main className='space-y-12 p-12'>
      <Header isCardView={isCardView} setIsCardView={setIsCardView} data={data} />
      {!isLoading &&
        isSuccess &&
        data &&
        data.length > 0 &&
        (isCardView ? (
          <CardsView data={data} actions={actions} />
        ) : (
          <TableView data={data} actions={actions} />
        ))}
      {ModalView}
      {/* <ModalView /> */}
    </main>
  )
}

export default EmployeePage
