import z from 'zod'

export const categorySchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'El nombre es requerido'),
  imageUrl: z.string().min(1, 'La imagen es requerida').url('Debe ser una url válida'),
  status: z.boolean()
})

export type CategoryInfer = z.infer<typeof categorySchema>
