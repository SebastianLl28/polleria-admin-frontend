import z from 'zod'

export const acountSchema = z.object({
  fullName: z.string().min(1, { message: 'El nombre no puede estar vacío' }),
  userName: z.string().min(1, { message: 'El nombre de usuario no puede estar vacío' })
})

export type AcountSchema = z.infer<typeof acountSchema>
