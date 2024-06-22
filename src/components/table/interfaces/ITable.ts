/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination } from '@/model/Pagination.model'

export interface ITable<T> {
  header: IHeader<T>[]
  data: Pagination<T> | T[] | any[]
  actions: IActions<T>[]
  rowClick?: (item: T) => void
}

export interface IHeader<T> {
  key: string
  label: string
  overflow: 'hidden' | 'visible'
  render?: (value: T) => JSX.Element
  size: number
  action?: (item: T) => void
  orderColumn?: boolean
  onSortAsc?: () => void
  onSortDesc?: () => void
  onSortRemove?: () => void
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
    | null
    | undefined
}
