import { EllipsisVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card as Cardcn, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { IActions } from '@/components/table'
import { User } from '@/model/User.model'

interface CardProps extends User {
  actions: IActions[]
}

const Card = ({ fullname, password, status, username, actions, id }: CardProps) => {
  return (
    <Cardcn className='relative bg-white shadow-md'>
      <CardHeader className='pb-2'>
        <CardTitle className='line-clamp-1 capitalize' title={`${fullname}`}>
          {fullname}
        </CardTitle>
      </CardHeader>
      <CardContent className='text-lg'>
        <p className='mt-1 leading-3'>{username}</p>
        <p className='mt-1 text-[.9em]'>{password}</p>
        <div className='mt-3.5'>
          <span
            className={`rounded-md px-2 py-1 font-semibold text-white ${status ? 'bg-green-500' : 'bg-red-500'} `}
          >
            {status ? 'Activo' : 'Inactivo'}
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
          <PopoverContent className='w-min p-2'>
            <div className='flex flex-col space-y-2'>
              {actions.map((action, actionIndex) => (
                <Button
                  key={actionIndex}
                  variant={action.variant || 'ghost'}
                  className='text-left text-sm'
                  onClick={() =>
                    action.action({
                      id,
                      fullname,
                      password,
                      status,
                      username
                    })
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
