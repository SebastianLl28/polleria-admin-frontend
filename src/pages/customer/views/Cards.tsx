import { Customer } from '@/model/Customer.model'
import { Pagination } from '@/model/Pagination.model'
import Card from '../components/Card'
import { IActions } from '@/components/table/interfaces/ITable'

interface CardsProps {
  data: Pagination<Customer>
  actions: IActions[]
}

const Cards = ({ data, actions }: CardsProps) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6'>
      {data?.content?.map(customer => (
        <Card key={customer.id} {...customer} actions={actions} />
      ))}
    </ul>
  )
}

export default Cards
