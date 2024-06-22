import Table from '@/components/table/Table'
import { IActions, IHeader } from '@/components/table/interfaces/ITable'
import { useGetAllCategories } from '@/hooks/categories.hook'
import { Category } from '@/model/Category.model'
import useModal from '../hooks/useModal'
import { useCategoryStore } from '../store/useCategoryStore'

const Body = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllCategories()
  const { setCategory } = useCategoryStore()

  const header: IHeader<Category>[] = [
    {
      key: 'name',
      label: 'Nombre',
      size: 1,
      overflow: 'visible'
    },
    {
      key: 'imageUrl',
      label: 'Imagen',
      size: 1,
      overflow: 'visible',
      render: ({ imageUrl }: Category) => {
        return <img src={imageUrl} alt='category' className='size-6' />
      }
    },
    {
      key: 'status',
      label: 'Estado',
      size: 1,
      overflow: 'visible',
      render: ({ status }: Category) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${status ? 'bg-green-500' : 'bg-destructive'}`}
          >
            {status ? 'Activo' : 'Inactivo'}
          </span>
        )
      }
    }
  ]

  const { Modal, openModal } = useModal()

  const actions: IActions<Category>[] = [
    {
      name: 'Editar',
      action: (category: Category) => openModal(category)
    }
  ]

  const rowClick = (category: Category) => {
    setCategory(category)
  }

  return (
    <div>
      {!isLoading && !isError && isSuccess && data.content.length > 0 && (
        <Table header={header} data={data} actions={actions} rowClick={rowClick} />
      )}
      <Modal />
    </div>
  )
}

export default Body
