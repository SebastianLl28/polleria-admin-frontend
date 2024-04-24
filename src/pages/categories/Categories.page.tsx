import Body from './sections/Body'
import Header from './sections/Header'
import { useCategoryStore } from './store/useCategoryStore'

const CategoriesPage = () => {
  const { category } = useCategoryStore()

  return (
    <main className='space-y-12 p-12'>
      <Header />
      <div className='grid grid-cols-2 space-x-20'>
        <Body />
        <section className='flex items-center justify-center rounded-md bg-gray-200'>
          {category ? (
            <div>
              <p>
                Mostrar listado de los productos que tengan <b>{category.name}</b>
              </p>
              <p className='text-center text-sm leading-normal text-gray-600'>
                Coming soon...
              </p>
            </div>
          ) : (
            <p>Seleccione una categoría para ver los productos</p>
          )}
        </section>
      </div>
    </main>
  )
}

export default CategoriesPage
