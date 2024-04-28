import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { FolderUp, Grip, Plus } from 'lucide-react'
import useModalForm from '../hooks/useModalForm'

const Header = () => {
  const { Modal, handleOpen } = useModalForm()

  return (
    <header className='flex w-full items-center justify-between'>
      <div className='flex space-x-4'>
        <h2 className='text-4xl font-bold'>Productos</h2>
        <Button variant='ghost' className='relative top-2 mt-auto space-x-2 px-4'>
          <Grip size={16} />
          <span className=''>Card View</span>
        </Button>
      </div>
      <div>
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
          <Button className='space-x-2' onClick={() => handleOpen(null)}>
            <Plus size={16} />
            <span>Crear</span>
          </Button>
        </div>
      </div>
      <Modal />
    </header>
  )
}

export default Header
