import z from 'zod'

export const securitySchema = z
  .object({
    oldPassword: z
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
    password: z
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Las contraseña no coincide con la nueva contraseña',
    path: ['confirmPassword']
  })

export type SecuritySchema = z.infer<typeof securitySchema>
