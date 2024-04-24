/* eslint-disable @typescript-eslint/no-explicit-any */
import { EllipsisVertical } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ITable } from '../interfaces/ITable'

const BodyTable = ({ header, data, actions, rowClick }: ITable) => {
  return (
    <div className='rounded-md border border-slate-200 bg-white'>
      {data.content.map((item: any, index: number) => (
        <div
          key={index}
          className={`grid w-full transition-colors ${!!rowClick && 'cursor-pointer hover:bg-slate-100'}`}
          onClick={() => !!rowClick && rowClick(item)}
          style={{
            gridTemplateColumns:
              header
                .filter(item => item.overflow === 'visible')
                .map(item => `${item.size}fr`)
                .join(' ') + ' 4rem'
          }}
        >
          {header.map((headerItem, headerIndex) => (
            <div
              key={headerIndex}
              className={`self-center border-b border-slate-200 px-4 py-4 ${headerItem.overflow === 'hidden' ? 'hidden' : ''}`}
              onClick={() => headerItem.action && headerItem.action(item[headerItem.key])}
            >
              {headerItem.render
                ? headerItem.render(item[headerItem.key])
                : item[headerItem.key]}
            </div>
          ))}
          {actions.length > 0 && (
            <div className='border-b border-slate-200 py-2 text-center text-lg text-primary'>
              <Popover>
                <PopoverTrigger>
                  <Button variant='ghost' className=''>
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
                        onClick={() => action.action(item)}
                      >
                        {action.name}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default BodyTable
