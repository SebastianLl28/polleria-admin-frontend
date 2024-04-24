/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITable {
  header: IHeader[]
  data: any
  actions: IActions[]
  rowClick?: (item: any) => void
}

export interface IHeader {
  key: string
  label: string
  overflow: 'hidden' | 'visible'
  render?: (value: any) => JSX.Element
  size: number
  action?: (item: string) => void
}

export interface IActions {
  name: string
  action: (id: any) => void
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
