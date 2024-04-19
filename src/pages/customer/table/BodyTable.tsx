/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITable } from '../interface/IHeader'

const BodyTable = ({ header, data }: ITable) => {
  return (
    <div className='rounded-md border border-slate-200 shadow'>
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className='grid w-full border-b border-slate-300 py-2'
          style={{
            gridTemplateColumns: header.map(item => `${item.size}fr`).join(' ')
          }}
        >
          {header.map((headerItem, headerIndex) => (
            <div
              key={headerIndex}
              className={`py-2 text-center ${
                headerItem.overflow === 'hidden' ? 'overflow-hidden' : ''
              }`}
            >
              {headerItem.render
                ? headerItem.render(item[headerItem.key])
                : item[headerItem.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default BodyTable
