import { FolderUp, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { generatePdf } from '@/lib/generatePdf'
import { setOrder, setSearch } from '@/store/employeeFilterSlice.store'
import ButtonCardView from '@/components/CardView.component'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hook'
import { User } from '@/model/User.model'

interface HeaderProps {
  isCardView: boolean
  setIsCardView: (state: boolean) => void
  data: Omit<User, 'password'>[] | undefined
  openAddModal: () => void
}

const Header = ({ isCardView, setIsCardView, data, openAddModal }: HeaderProps) => {
  const { order, search } = useAppSelector(state => state.employeeFilter)
  const dispatch = useAppDispatch()

  const handleExport = () => {
    if (data) {
      const exportData = data.map(element => ({
        ID: element.id,
        'Nombre de Usuario': element.username,
        'Nombre Completo': element.fullname,
        Estado: element.status ? 'Activo' : 'Inactivo'
      }))
      generatePdf(exportData, 'empleados')
    }
  }

  return (
    <header className='flex justify-between'>
      <div className='flex space-x-4'>
        <h2 className='text-4xl font-bold'>Empleados</h2>
        <ButtonCardView isCardView={isCardView} setIsCardView={setIsCardView} />
      </div>
      <div className='flex items-center space-x-6'>
        <Input
          value={search}
          onChange={e => dispatch(setSearch(e.target.value))}
          placeholder='Buscar Empleado...'
        />
        <Select
          value={String(order)}
          onValueChange={(value: 'ALL' | 'ACTIVE' | 'INACTIVE') => {
            dispatch(setOrder(value))
          }}
        >
          <SelectTrigger className='w-72'>
            <SelectValue placeholder='Filtrar por' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='ALL'>Todos</SelectItem>
            <SelectItem value='ACTIVE'>Activo</SelectItem>
            <SelectItem value='INACTIVE'>Inactivos</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={openAddModal}>
          <Plus size={16} className='mr-2' />
          Agregar
        </Button>
        <Button
          className='ml-4 space-x-2'
          type='button'
          variant='secondary'
          onClick={handleExport}
          disabled={data === undefined}
        >
          <FolderUp size={16} />
          <span>Exportar</span>
        </Button>
      </div>
    </header>
  )
}

export default Header
