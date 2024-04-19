/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITable {
  header: IHeader[]
  data: any
}

export interface IHeader {
  key: string
  label: string
  overflow: 'hidden' | 'visible'
  render?: (value: boolean) => JSX.Element
  size: number
  action?: (item: string) => void
}
