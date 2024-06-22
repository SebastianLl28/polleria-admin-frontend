import { User } from '@/model/User.model'
import { IActions } from '@/components/table'
import { Card } from '../components'

interface CardViewProps {
  data: Omit<User, 'password'>[]
  actions: IActions<Omit<User, 'password'>>[]
}
const CardsView = ({ data, actions }: CardViewProps) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6'>
      {data.map(user => (
        <Card key={user.id} {...user} actions={actions} />
      ))}
    </ul>
  )
}

export default CardsView
