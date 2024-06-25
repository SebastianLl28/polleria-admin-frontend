import { FolderUp, Grip } from 'lucide-react'
import { generatePdf } from '@/lib/generatePdf'
import { useDebouncedCallback } from 'use-debounce'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Customer, CustomerStatus } from '@/model/Customer.model'
import { useDialog } from '../hook'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hook'
import { Input } from '@/components/ui/input'
import { setFilterBy, setName } from '@/store/customerFilterSlice.store'

interface HeaderProps {
  isCardView: boolean
  setIsCardView: (value: boolean) => void
  data: Customer[]
}

const Header = ({ isCardView, setIsCardView, data }: HeaderProps) => {
  const { ModalCustomer } = useDialog()

  const handleClickCard = () => {
    setIsCardView(!isCardView)
  }

  const handleExport = () => {
    const dataExport = data.map(item => ({
      nombre: item.name,
      apellido: item.lastname,
      correo: item.email,
      cumpleaños: item.birthdate,
      estado:
        (item.status === 'ACTIVE' && 'Activo') ||
        (item.status === 'BLOCKED' && 'Bloqueado') ||
        'No verificado'
    }))
    generatePdf(dataExport, 'customers')
  }

  const { filterBy } = useAppSelector(state => state.customerFilter)
  const dipatch = useAppDispatch()

  const debounced = useDebouncedCallback(value => {
    dipatch(setName(value))
  }, 500)

  return (
    <section className='flex w-full items-center justify-between'>
      <div className='flex space-x-4'>
        <h2 className='text-4xl font-bold'>Clientes</h2>
        <Button
          variant='ghost'
          className={`relative top-2 mt-auto space-x-2 px-4 ${isCardView && 'bg-slate-100'}`}
          onClick={handleClickCard}
        >
          <Grip size={16} />
          <span className=''>Card View</span>
        </Button>
      </div>
      <div className='flex items-center space-x-4'>
        <Input
          placeholder='Buscar Cliente...'
          onChange={e => debounced(e.target.value)}
        />
        <Select
          value={filterBy}
          onValueChange={(e: keyof typeof CustomerStatus) => dipatch(setFilterBy(e))}
        >
          <SelectTrigger className='w-72'>
            <SelectValue placeholder='Filtrar por' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='ALL'>Todos</SelectItem>
            <SelectItem value='ACTIVE'>Activos</SelectItem>
            <SelectItem value='BLOCKED'>Bloqueados</SelectItem>
            <SelectItem value='UNVERIFIED'>No verificados</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className='ml-4 space-x-2'
          type='button'
          variant='secondary'
          onClick={handleExport}
        >
          <FolderUp size={16} />
          <span>Exportar</span>
        </Button>
      </div>
      <ModalCustomer />
    </section>
  )
}

export default Header
