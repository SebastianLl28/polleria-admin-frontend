import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useGetProductById } from '@/hooks/products.hook'
import { Building, Star } from 'lucide-react'

interface ProductModalProps {
  idProduct: number | null
  isOpen: boolean
  closeModal: () => void
}

const ProductModal = ({ idProduct, isOpen, closeModal }: ProductModalProps) => {
  const { data, isLoading, isSuccess } = useGetProductById(idProduct)

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className='max-w-[55rem]'>
        {!isLoading && isSuccess && data && (
          <>
            <div className={`absolute right-5 top-4 flex items-center justify-center`}>
              <div
                className={`absolute size-4 animate-ping rounded-full ${data?.status ? 'bg-green-500' : 'bg-red-500'}`}
              />
              <div
                className={`size-4 rounded-full ${data?.status ? 'bg-green-500' : 'bg-red-500'}`}
              />
            </div>
            <AlertDialogTitle className='text-center text-xl'>
              {data.name}
            </AlertDialogTitle>
            <div className='grid grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <ul className='flex gap-2'>
                  {data.categoryList.map(category => (
                    <li key={category}>
                      <Badge>{category}</Badge>
                    </li>
                  ))}
                </ul>
                <p>{data.description}</p>
                <div className='flex space-x-6'>  
                  <p className='font-semibold'>
                    Precio: <span className='font-normal'>S/.{data.price}</span>
                  </p>
                  <div className='flex gap-2'>
                    <p className='font-semibold'>Valoración:</p>
                    <p className='flex items-center gap-1'>
                      {data.valoration} <Star className='text-yellow-400' />
                    </p>
                  </div>
                </div>
                {/* Images */}
                <div className='w-full space-y-2'>
                  <p className='font-semibold'>Imagenes:</p>
                  <Carousel className='w-full'>
                    <CarouselContent className='items-center'>
                      {data.cardImage && (
                        <CarouselItem className='flex h-full w-full basis-1/4 items-center justify-center'>
                          <img
                            src={data.cardImage}
                            alt='product'
                            className='h-auto w-full rounded-md object-cover'
                          />
                        </CarouselItem>
                      )}
                      {data.detailImage && (
                        <CarouselItem className='flex h-full w-full basis-1/4 items-center justify-center'>
                          <img
                            src={data.detailImage}
                            alt='product'
                            className='m-auto h-auto w-full rounded-md object-cover'
                          />
                        </CarouselItem>
                      )}
                      {data.galleryImages.length > 0 &&
                        data.galleryImages.map((image, index) => (
                          <CarouselItem
                            key={index}
                            className='flex h-full w-full basis-1/4 items-center justify-center'
                          >
                            <img
                              src={image}
                              alt='product'
                              className='h-auto w-full rounded-md object-cover'
                            />
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
              <div className='w-full rounded-md bg-slate-200 p-2'>
                <ul className={`grid grid-cols-2 gap-x-1 ${!(data.stock.length > 0) ? 'h-full' : '' }`}>
                  {data.stock.length > 0 ? (
                    data.stock.map(({ quantity, store }, index) => (
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
                    ))
                  ) : (
                    <div className='relative col-span-2 flex flex-col items-center justify-center py-2 text-slate-400 '>
                      <div>
                        <Building className='mx-auto' />
                        <p className='select-none text-center'>No hay stock</p>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
        <AlertDialogFooter>
          <Button onClick={closeModal}>Cerrar</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ProductModal
