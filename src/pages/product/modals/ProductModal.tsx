import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useGetProductById } from '@/hooks/products.hook'
import { Building } from 'lucide-react'
import { useEffect } from 'react'

interface ProductModalProps {
  idProduct: number | null
  isOpen: boolean
  closeModal: () => void
}

const ProductModal = ({ idProduct, isOpen, closeModal }: ProductModalProps) => {
  const { data, isLoading, isSuccess } = useGetProductById(idProduct)

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className=''>
        {!isLoading && isSuccess && data && (
          <>
            <div
              className={`absolute right-3 top-3 size-4 rounded-full ${data?.status ? 'bg-green-500' : 'bg-red-500'}`}
            ></div>
            <AlertDialogTitle className='text-center text-xl'>
              {data.name}
            </AlertDialogTitle>
            <ul className='flex gap-2'>
              {data.categoryList.map(category => (
                <li key={category}>
                  <Badge>{category}</Badge>
                </li>
              ))}
            </ul>
            <p>{data.description}</p>
            <div className='w-full rounded-md bg-slate-200 p-2'>
              <ul className='grid grid-cols-2 gap-x-1'>
                {data.stock.map(({ quantity, store }, index) => (
                  <li
                    key={index}
                    className='grid cursor-pointer grid-flow-col grid-cols-[min-content,auto] gap-x-2 overflow-hidden rounded-md px-2 py-2 transition-colors hover:bg-slate-300'
                  >
                    <Building className='row-span-2 self-center' />
                    <p className='line-clamp-1 text-sm font-semibold leading-4'>
                      {store}
                    </p>
                    <p className='text-xs'>Cantidad: {quantity}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <AlertDialogFooter>
          {/* <Button onClick={closeModal}>Cerrar</Button> */}
          <Button onClick={closeModal}>Cerrar</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ProductModal
