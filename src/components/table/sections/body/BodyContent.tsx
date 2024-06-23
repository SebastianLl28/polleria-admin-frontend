import { ITable } from '../../interfaces/ITable'
import BodyButton from './BodyButton'

interface IContent<T> extends Omit<ITable<T>, 'data'> {
  item: T
}

const BodyContent = <T,>({ actions, header, item, rowClick }: IContent<T>) => {
  return (
    <tr
      className={`-z-10 grid w-full border-b border-slate-200 transition-colors last:border-0 ${rowClick && ' cursor-pointer hover:bg-slate-100 '} `}
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
                ? headerItem.render(item)
                : String(item[headerItem.key as keyof T])}
            </td>
          )
      )}
      {actions.length > 0 && (
        <td className='lastTd my-auto py-2 text-center text-lg text-primary'>
          <BodyButton actions={actions} item={item} />
        </td>
      )}
    </tr>
  )
}

export default BodyContent
