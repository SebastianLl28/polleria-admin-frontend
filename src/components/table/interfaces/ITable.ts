/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination } from '@/model/Pagination.model'
import { CustomerFilterState } from '@/store/customerFilterSlice.store'

export interface ITable<T> {
  header: IHeader<T>[]
  data: Pagination<T> | T[] | any[]
  actions: IActions<T>[]
  rowClick?: (item: T) => void
  filter: CustomerFilterState
  setFilter: (filter: Partial<CustomerFilterState>) => void
}

export interface IHeader<T> {
  key: string
  label: string
  overflow: 'hidden' | 'visible'
  render?: (value: T) => JSX.Element
  size: number
  action?: (item: T) => void
  orderColumn?: boolean
}

export interface IActions<T> {
  name: string
  action: (T: T) => void
  variant?:
    | 'destructive'
    | 'link'
    | 'default'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'warning'
    | 'success'
    | null
    | undefined
}
