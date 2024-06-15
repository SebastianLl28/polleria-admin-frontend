import { Pagination } from '@/model/Pagination.model'
import { Store } from '@/model/Store.model'
import Card from '../components/Card'
import { IActions } from '@/components/table'

interface CardviewProps {
  data: Pagination<Store>
  actions: IActions[]
}

const CardView = ({ data, actions }: CardviewProps) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6'>
      {data.content.map(store => (
        <Card key={store.id} {...store} actions={actions} />
      ))}
    </ul>
  )
}

export default CardView
