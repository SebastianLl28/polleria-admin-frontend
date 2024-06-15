import { useState } from 'react'
import { useGetAllStores } from '@/hooks/store.hook'
import { IActions } from '@/components/table'
import { Header, TableView, CardView } from './sections'
import useViewModal from './hooks/useViewModal'

const LocalPage = () => {
  const [isCardView, setIsCardView] = useState(false)
  const { data, isLoading, isSuccess } = useGetAllStores()
  const { ViewModalContainer, openModal } = useViewModal()

  const actions: IActions[] = [
    {
      name: 'View',
      action: openModal
    }
  ]

  return (
    <main className='space-y-12 p-12'>
      <Header isCardView={isCardView} setIsCardView={setIsCardView} />
      {!isLoading &&
        isSuccess &&
        data &&
        (isCardView ? (
          <CardView data={data} actions={actions} />
        ) : (
          <TableView data={data} action={actions} />
        ))}
      <ViewModalContainer />
    </main>
  )
}

export default LocalPage
