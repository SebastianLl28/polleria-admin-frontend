import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ITable } from '../../interfaces/ITable'
import { Button } from '@/components/ui/button'
import { EllipsisVertical } from 'lucide-react'

interface IContent<T> extends Omit<ITable<T>, 'data'> {
  item: T
}

const BodyContent = <T,>({ actions, header, item, rowClick }: IContent<T>) => {
  return (
    <tr
      className={`grid w-full border-b border-slate-200 transition-colors last:border-0 ${rowClick ? 'cursor-pointer hover:bg-slate-100' : ''}`}
      onClick={() => rowClick && rowClick(item)}
      style={{
        gridTemplateColumns:
          header
            .filter(item => item.overflow === 'visible')
            .map(item => `${item.size}fr`)
            .join(' ') + ' 4rem'
      }}
    >
      {header.map(
        (headerItem, headerIndex) =>
          headerItem.overflow !== 'hidden' && (
            <td
              key={headerIndex}
              className={`self-center px-4 py-4`}
              onClick={() => headerItem.action && headerItem.action(item)}
              style={{
                paddingBlock: headerItem.render?.toString().includes('img')
                  ? '0.4rem'
                  : ''
              }}
            >
              {headerItem.render
                ? headerItem.render(item[headerItem.key as keyof T] as unknown as string)
                : String(item[headerItem.key as keyof T])}
            </td>
          )
      )}
      {actions.length > 0 && (
        <td className='my-auto py-2 text-center text-lg text-primary'>
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
        </td>
      )}
    </tr>
  )
}

export default BodyContent
