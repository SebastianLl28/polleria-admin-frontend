import { useMemo } from 'react'
import { CustomerFilterState } from '@/store/customerFilterSlice.store'
import HeaderOrder from './HeaderOrder'
import HeaderBasic from './HeaderBasic'
import { IHeader } from '../../interfaces/ITable'

interface HeaderProps<T> {
  header: IHeader<T>[]
  filter: CustomerFilterState
  setFilter: (filter: Partial<CustomerFilterState>) => void
}

const Header = <T,>({ header, filter, setFilter }: HeaderProps<T>) => {
  const gridTemplateColumns = useMemo(
    () =>
      header
        .filter(item => item.overflow === 'visible')
        .map(item => `${item.size}fr`)
        .join(' ') + ' 4rem',
    [header]
  )

  /**
   * Get next order
   * @description as there are only 3 states, the next state is 0 if the current state is 2, otherwise it is the current state + 1
   * @param currentOrder number - current order
   * @returns number - next order
   */
  const getNextOrder = (currentOrder: string | null): null | 'asc' | 'desc' => {
    if (currentOrder === null) return 'asc'
    if (currentOrder === 'asc') return 'desc'
    if (currentOrder === 'desc') return null
    return null
  }

  const handleClick = (index: number) => {
    if (filter.orderBy && filter.orderBy.key === header[index].key) {
      setFilter({
        page: 0,
        orderBy: {
          key: header[index].key,
          order: getNextOrder(filter.orderBy?.order)
        }
      })
      return
    }
    setFilter({
      page: 0,
      orderBy: {
        key: header[index].key,
        order: 'asc'
      }
    })
  }

  return (
    <thead>
      <tr
        className='mb-4 grid w-full rounded bg-primary font-semibold text-primary-foreground'
        style={{ gridTemplateColumns }}
      >
        {header.map(
          ({ label, overflow, orderColumn, key }, index) =>
            overflow !== 'hidden' && (
              <th key={index} className={`px-4 py-2 text-start text-lg`}>
                {orderColumn ? (
                  <HeaderOrder
                    label={label}
                    index={index}
                    filter={filter}
                    onClick={handleClick}
                    keyString={key}
                  />
                ) : (
                  <HeaderBasic label={label} />
                )}
              </th>
            )
        )}
      </tr>
    </thead>
  )
}

export default Header
