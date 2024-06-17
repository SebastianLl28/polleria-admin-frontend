import { Calendar, EllipsisVertical, Mail, User } from 'lucide-react'
import { Card as Cardcn, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Customer } from '@/model/Customer.model'
import { IActions } from '@/components/table'

interface CardProps extends Customer {
  actions: IActions[]
}

const Card = ({ birthdate, email, lastname, name, status, id, actions }: CardProps) => {
  return (
    <Cardcn className='relative overflow-hidden bg-white shadow-md'>
      <CardHeader className='pb-2'>
        <CardTitle className='mb-1 line-clamp-1 capitalize' title={`${name} ${lastname}`}>
          {name} {lastname}
        </CardTitle>
        <div className='mt-1 flex items-center space-x-1'>
          <Mail className='text-gray-500' size={18} />
          <p className='text-base '>{email}</p>
        </div>
        <div className='mt-1 flex items-center space-x-1'>
          <Calendar className='text-gray-500' size={18} />
          <p className='text-[0.9em]'>{birthdate}</p>
        </div>
      </CardHeader>
      <CardContent className='text-lg'>
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
      <User className='absolute -bottom-3 -right-5 select-none' size={100} />
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
