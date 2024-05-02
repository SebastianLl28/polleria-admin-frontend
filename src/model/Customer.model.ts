export interface Customer {
  id: number
  name: string
  lastname: string
  email: string
  password: string
  birthdate: string
  status: 'UNVERIFIED' | 'ACTIVE' | 'BLOCKED'
}
