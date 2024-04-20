/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITable } from '../interface/IHeader'

const BodyTable = ({ header, data }: ITable) => {
  return (
    <div className='rounded-md border border-slate-200 shadow'>
      {data.content.map((item: any, index: number) => (
        <div
          key={index}
          className='grid w-full'
          style={{
            gridTemplateColumns: header
              .filter(item => item.overflow === 'visible')
              .map(item => `${item.size}fr`)
              .join(' ')
          }}
        >
          {header.map((headerItem, headerIndex) => (
            <div
              key={headerIndex}
              className={`border-b border-slate-200 py-4 text-center text-lg ${headerItem.overflow === 'hidden' ? 'hidden' : ''}`}
              onClick={() => headerItem.action && headerItem.action(item[headerItem.key])}
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
