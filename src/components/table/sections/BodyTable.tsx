/* eslint-disable @typescript-eslint/no-explicit-any */
import { EllipsisVertical } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ITable } from '../interfaces/ITable'

interface IContent extends Omit<ITable, 'data'> {
  item: any
  index: number
}

const Content = ({ actions, header, index, item, rowClick }: IContent) => {
  return (
    <div
      key={index}
      className={`grid w-full border-b border-slate-200 transition-colors last:border-0 ${!!rowClick && 'cursor-pointer hover:bg-slate-100'}`}
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
          className={`self-center px-4 py-4 ${headerItem.overflow === 'hidden' ? 'hidden' : ''}`}
          onClick={() => headerItem.action && headerItem.action(item[headerItem.key])}
          style={{
            paddingBlock: headerItem.render?.toString().includes('img') ? '0.4rem' : ''
          }}
        >
          {headerItem.render
            ? headerItem.render(item[headerItem.key])
            : item[headerItem.key]}
        </div>
      ))}
      {actions.length > 0 && (
        <div className='my-auto py-2 text-center text-lg text-primary'>
          <Popover>
            <PopoverTrigger>
              <Button variant='ghost' className=''>
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
  )
}

const BodyTable = ({ header, data, actions, rowClick }: ITable) => {
  return (
    <div className='rounded-md border border-slate-200 bg-white'>
      {data?.content
        ? data.content.map((item: any, index: number) => (
            <Content
              item={item}
              index={index}
              header={header}
              actions={actions}
              rowClick={rowClick}
            />
          ))
        : data.map((item: any, index: number) => (
            <Content
              item={item}
              index={index}
              header={header}
              actions={actions}
              rowClick={rowClick}
            />
          ))}
    </div>
  )
}

export default BodyTable
