import z from 'zod'

export const EmployeeSchema = z.object({
  fullname: z.string().min(1, 'El Nombre completo es necesario'),
  username: z.string().min(1, 'El Nombre completo es necesario'),
  status: z.boolean().default(false)
})

export type TEmployeeSchema = z.infer<typeof EmployeeSchema>
