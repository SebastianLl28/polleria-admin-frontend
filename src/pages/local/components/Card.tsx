import { EllipsisVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card as CardCn,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { IActions } from '@/components/table'
import { Store } from '@/model/Store.model'

interface CardProps extends Store {
  actions: IActions[]
}

const Card = ({
  name,
  address,
  imageUrl,
  status,
  phone,
  actions,
  ...args
}: CardProps) => {
  return (
    <CardCn className='relative bg-white shadow-md'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{address}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={imageUrl} className='h-40 w-full object-cover' />
        <p>{status}</p>
        <p>{phone}</p>
      </CardContent>
      <div className='absolute right-2 top-4'>
        <Popover>
          <PopoverTrigger>
            <Button variant='ghost' className='px-2'>
              <EllipsisVertical size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-min'>
            <div className='flex flex-col space-y-2'>
              {actions.map((action, actionIndex) => (
                <Button
                  key={actionIndex}
                  variant={action.variant || 'ghost'}
                  className='text-left text-sm'
                  onClick={() =>
                    action.action({ name, address, imageUrl, status, phone, ...args })
                  }
                >
                  {action.name}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </CardCn>
  )
}

export default Card
