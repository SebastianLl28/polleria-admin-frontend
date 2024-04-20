import { ITable } from '../interface/IHeader'
import BodyTable from './BodyTable'
import Header from './HeaderTable'

const Table = ({ header, data, actions }: ITable) => {
  return (
    <div className='space-y-4'>
      <Header header={header} />
      <BodyTable header={header} data={data} actions={actions} />
    </div>
  )
}

export default Table
