import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { EllipsisVertical } from 'lucide-react'
import { MouseEvent, useState } from 'react'
import { IActions } from '../../interfaces/ITable'

interface BodyButtonProps<T> {
  actions: IActions<T>[]
  item: T
}

const BodyButton = <T,>({ actions, item }: BodyButtonProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    setIsOpen(open => !open)
  }

  const onChange = (open: boolean) => {
    setIsOpen(open)
  }

  return (
    <Popover open={isOpen} onOpenChange={onChange}>
      <PopoverTrigger className='z-10'>
        <Button variant='ghost' onClick={handleClick}>
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
              onClick={e => {
                e.stopPropagation()
                action.action(item)
              }}
            >
              {action.name}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default BodyButton
