import { useMemo } from 'react'
import { ITable } from '../../interfaces/ITable'
import BodyContent from './BodyContent'

const BodyTable = <T,>({ header, data, actions, rowClick }: ITable<T>) => {
  const arrayData = useMemo(() => {
    if (Array.isArray(data)) {
      return data
    }
    return data.content
  }, [data])

  return (
    <tbody className='rounded-md border border-slate-200 bg-white'>
      {arrayData.length > 0 ? (
        arrayData.map((item, index) => (
          <BodyContent
            key={index}
            item={item}
            header={header}
            actions={actions}
            rowClick={rowClick}
          />
        ))
      ) : (
        <tr>
          <td colSpan={header.length + 1} className='py-4 text-center'>
            No hay datos
          </td>
        </tr>
      )}
    </tbody>
  )
}

export default BodyTable
