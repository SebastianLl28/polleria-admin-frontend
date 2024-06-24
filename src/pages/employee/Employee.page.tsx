import { useState } from 'react'
import { IActions } from '@/components/table'
import { useGetAllUsers } from '@/hooks/user.hook'
import { User } from '@/model/User.model'
import { Header, CardsView, TableView } from './sections'
import { useModal } from './hooks'
import useConfirmationModal from './hooks/useConfirmationModal'

const EmployeePage = () => {
  const { data, isLoading, isSuccess } = useGetAllUsers()
  const [isCardView, setIsCardView] = useState(false)

  const { handleOpenView, ModalView, handleOpenEdit, handleOpenAdd } = useModal()

  const { ConfirmationModal, openConfirmationModal } = useConfirmationModal()

  const actions: IActions<Omit<User, 'password'>>[] = [
    {
      name: 'Ver',
      action: handleOpenView
    },
    {
      name: 'Editar',
      action: handleOpenEdit,
      variant: 'warning'
    },
    {
      name: 'Eliminar',
      action: user => openConfirmationModal(user.id),
      variant: 'destructive'
    }
  ]

  return (
    <main className='space-y-12 p-12'>
      <Header
        isCardView={isCardView}
        setIsCardView={setIsCardView}
        data={data}
        openAddModal={handleOpenAdd}
      />
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
      <ConfirmationModal />
    </main>
  )
}

export default EmployeePage
