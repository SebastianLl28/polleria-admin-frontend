import { ITable } from '../../interfaces/ITable'
import BodyContent from './BodyContent'

const BodyTable = <T,>({ header, data, actions, rowClick }: ITable<T>) => {
  return (
    <tbody className='rounded-md border border-slate-200 bg-white'>
      {Array.isArray(data)
        ? data.map((item, index) => (
            <BodyContent
              key={index}
              item={item}
              header={header}
              actions={actions}
              rowClick={rowClick}
            />
          ))
        : data.content.map((item, index) => (
            <BodyContent
              key={index}
              item={item}
              header={header}
              actions={actions}
              rowClick={rowClick}
            />
          ))}
    </tbody>
  )
}

export default BodyTable
