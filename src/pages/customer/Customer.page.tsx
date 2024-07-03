import { useState } from 'react'
import { Customer } from '@/model/Customer.model'
import { IActions } from '@/components/table'
import { useDialog, useData } from './hook'
import { Header, Cards, TableView } from './sections'

const CustomerPage = () => {
  const { data, isLoading, isSuccess } = useData()

  const [isCardView, setIsCardView] = useState(false)
  const { ModalCustomer, openDialog } = useDialog()

  const actions: IActions<Customer>[] = [
    {
      name: 'Ver',
      action: openDialog
    }
  ]

  return (
    <main className='space-y-12 p-12'>
      <Header
        isCardView={isCardView}
        setIsCardView={setIsCardView}
        data={data?.content || []}
      />
      {!isLoading &&
        isSuccess &&
        data &&
        (isCardView ? (
          <Cards data={data} actions={actions} />
        ) : (
          <TableView data={data} actions={actions} />
        ))}
      <ModalCustomer />
    </main>
  )
}

export default CustomerPage
