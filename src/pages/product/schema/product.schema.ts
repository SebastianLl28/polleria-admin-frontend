import z from 'zod'

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  cardImage: z.string(),
  detailImage: z.string(),
  galleryImages: z.array(z.string()),
  categoryList: z.array(z.string())
})

export type TProductSchema = z.infer<typeof ProductSchema>
