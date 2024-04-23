import z from 'zod'

export const loginSchema = z.object({
  userName: z
    .string({
      required_error: 'El correo electrónico es requerido'
    })
    .min(1, 'El correo electrónico es requerido')
    .max(100, 'El correo electrónico debe tener menos de 100 caracteres'),
  password: z
    .string({
      required_error: 'La contraseña es requerida'
    })
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(100, 'La contraseña debe tener menos de 100 caracteres')
})

export type LoginSchema = z.infer<typeof loginSchema>
