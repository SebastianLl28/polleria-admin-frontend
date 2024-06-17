import { useState } from 'react'
import { IActions } from '@/components/table'
import { useGetAllUsers } from '@/hooks/user.hook'
import { Header, CardsView, TableView } from './sections'
import { useModal } from './hooks'

const EmployeePage = () => {
  const { data, isLoading, isSuccess } = useGetAllUsers()
  const [isCardView, setIsCardView] = useState(false)

  const { handleOpen, ModalView } = useModal()

  const actions: IActions[] = [
    {
      name: 'Ver',
      action: handleOpen
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
      <ModalView />
    </main>
  )
}

export default EmployeePage
