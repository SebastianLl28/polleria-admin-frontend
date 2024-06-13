import { Customer } from '@/model/Customer.model'
import { Card as Cardcn, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { EllipsisVertical } from 'lucide-react'
import { IActions } from '@/components/table/interfaces/ITable'

interface CardProps extends Customer {
  actions: IActions[]
}

const Card = ({ birthdate, email, lastname, name, status, id, actions }: CardProps) => {
  return (
    <Cardcn className='relative bg-white shadow-md'>
      <CardHeader className='pb-2'>
        <CardTitle className='line-clamp-1 capitalize' title={`${name} ${lastname}`}>
          {name} {lastname}
        </CardTitle>
      </CardHeader>
      <CardContent className='text-lg'>
        <p className='mt-1 leading-3'>{email}</p>
        <p className='mt-1 text-[.9em]'>{birthdate}</p>
        <div className='mt-1'>
          <span
            className={`rounded-md px-2 py-1 font-semibold text-white ${status === 'ACTIVE' && 'bg-green-500'} ${status === 'UNVERIFIED' && 'bg-yellow-500'} ${status === 'BLOCKED' && 'bg-red-500'}`}
          >
            {status === 'ACTIVE' && 'Activo'}
            {status === 'BLOCKED' && 'Inactivo'}
            {status === 'UNVERIFIED' && 'No verificado'}
          </span>
        </div>
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
                    action.action({ birthdate, email, lastname, name, status, id })
                  }
                >
                  {action.name}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </Cardcn>
  )
}

export default Card
