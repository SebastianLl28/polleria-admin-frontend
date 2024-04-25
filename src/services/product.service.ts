import { baseApi } from '@/api/baseApi.api'
import { Pagination } from '@/model/Pagination.model'
import { Product } from '@/model/Product.model'

export const getAllProducts = async () => {
  return await baseApi.get<Pagination<Product>>('/products').then(res => res.data)
}

interface ProductDetail extends Product {
  stock: {
    quantity: number
    store: string
  }[]
}

export const getProductById = async (id: number) => {
  return await baseApi.get<ProductDetail>(`/products/${id}`).then(res => res.data)
}
