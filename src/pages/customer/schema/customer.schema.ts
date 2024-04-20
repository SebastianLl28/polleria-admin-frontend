import { loginSchema } from '@/pages/login/schema/login.schema'
import z from 'zod'

export const addCustomerSchema = loginSchema.extend({
  name: z
    .string({
      required_error: 'El nombre es requerido'
    })
    .min(1, 'El nombre es requerido')
    .max(100, 'El nombre debe tener menos de 100 caracteres'),
  lastname: z
    .string({
      required_error: 'El apellido es requerido'
    })
    .min(1, 'El apellido es requerido')
    .max(100, 'El apellido debe tener menos de 100 caracteres'),
  birthdate: z.date({
    required_error: 'La fecha de nacimiento es requerida'
  })
})

export type AddCustomerSchema = z.infer<typeof addCustomerSchema>
