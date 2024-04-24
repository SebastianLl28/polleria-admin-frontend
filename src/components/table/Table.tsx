import { ITable } from './interfaces/ITable'
import BodyTable from './sections/BodyTable'
import HeaderTable from './sections/HeaderTable'

const Table = ({ header, data, actions, rowClick }: ITable) => {
  return (
    <div className='space-y-4'>
      <HeaderTable header={header} />
      <BodyTable header={header} data={data} actions={actions} rowClick={rowClick} />
    </div>
  )
}

export default Table
