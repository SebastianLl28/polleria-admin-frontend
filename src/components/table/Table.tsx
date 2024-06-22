import { ITable } from './interfaces/ITable'
import BodyTable from './sections/body/BodyTable'
import HeaderTable from './sections/header/HeaderTable'

const Table = <T,>({ header, data, actions, rowClick }: ITable<T>) => {
  return (
    <table className='w-full'>
      <HeaderTable header={header} />
      <BodyTable header={header} data={data} actions={actions} rowClick={rowClick} />
    </table>
  )
}

export default Table
