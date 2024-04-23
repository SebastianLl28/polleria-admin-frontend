import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { FolderUp, Grip } from 'lucide-react'
import useDialog from '../hook/useDialog'

const Header = () => {
  const { ModalCustomer } = useDialog()

  return (
    <section className='flex w-full items-center justify-between'>
      <div className='flex space-x-4'>
        <h2 className='text-4xl font-bold'>Clientes</h2>
        <Button variant='ghost' className='relative top-2 mt-auto space-x-2 px-4'>
          <Grip size={16} />
          <span className=''>Card View</span>
        </Button>
      </div>
      <div className='flex items-center space-x-4'>
        <Select>
          <SelectTrigger className='w-48'>
            <SelectValue placeholder='Ordernar por...' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='name'>Nombre</SelectItem>
            <SelectItem value='email'>Correo</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-48'>
            <SelectValue placeholder='Filtrar por' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>Todos</SelectItem>
            <SelectItem value='active'>Activos</SelectItem>
            <SelectItem value='inactive'>Inactivos</SelectItem>
          </SelectContent>
        </Select>
        <Button className='space-x-2' type='button' variant='secondary'>
          <FolderUp size={16} />
          <span>Exportar</span>
        </Button>
      </div>
      <ModalCustomer />
    </section>
  )
}

export default Header
