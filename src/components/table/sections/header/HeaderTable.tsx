import { useCallback, useMemo, useRef, useState } from 'react'
import { IHeader } from '../../interfaces/ITable'
import HeaderOrder from './HeaderOrder'
import HeaderBasic from './HeaderBasic'

interface HeaderProps<T> {
  header: IHeader<T>[]
}

interface Order {
  index: number
  order: number
}

const Header = <T,>({ header }: HeaderProps<T>) => {
  const orders = useRef([null, 'ASC', 'DESC'])

  const gridTemplateColumns = useMemo(
    () =>
      header
        .filter(item => item.overflow === 'visible')
        .map(item => `${item.size}fr`)
        .join(' ') + ' 4rem',
    [header]
  )

  const [order, setOrder] = useState<Order[]>(
    header.map((_, index) => ({ index, order: 0 }))
  )

  const getNextOrder = (currentOrder: number) => {
    return currentOrder === 2 ? 0 : currentOrder + 1
  }

  const handleClick = (index: number) => {
    const nextOrder = getNextOrder(order.find(item => item.index === index)?.order || 0)
    setOrder(prevOrder => {
      const newOrder = [...prevOrder]
      const indexOrder = newOrder.findIndex(item => item.index === index)
      newOrder[indexOrder] = { index, order: nextOrder }
      return newOrder
    })
  }

  const findOrder = useCallback(
    (index: number) => {
      return order.find(item => item.index === index)?.order || 0
    },
    [order]
  )

  const onSortAscDefault = () => {
    throw new Error('onSortAsc is not defined')
  }

  const onSortDescDefault = () => {
    throw new Error('onSortDesc is not defined')
  }

  const onSortRemoveDefault = () => {
    throw new Error('onSortRemove is not defined')
  }

  return (
    <thead>
      <tr
        className='mb-4 grid w-full rounded bg-primary font-semibold text-primary-foreground'
        style={{ gridTemplateColumns }}
      >
        {header.map(
          (
            { label, overflow, orderColumn, onSortAsc, onSortDesc, onSortRemove },
            index
          ) => (
            <th
              key={index}
              className={`px-4 py-2 text-start text-lg ${overflow === 'hidden' ? 'hidden' : ''}`}
            >
              {orderColumn ? (
                <HeaderOrder
                  label={label}
                  index={index}
                  order={orders.current[findOrder(index)] as 'ASC' | 'DESC' | null}
                  onClick={handleClick}
                  onSortAsc={onSortAsc || onSortAscDefault}
                  onSortDesc={onSortDesc || onSortDescDefault}
                  onSortRemove={onSortRemove || onSortRemoveDefault}
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
