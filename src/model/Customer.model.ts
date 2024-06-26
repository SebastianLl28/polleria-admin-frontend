export interface Customer {
  id: number
  name: string
  lastname: string
  email: string
  birthdate: string
  status: CustomerStatus
}

export enum CustomerStatus {
  UNVERIFIED = 'UNVERIFIED',
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED'
}
