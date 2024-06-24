import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Eye, PencilIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { User } from '@/model/User.model'
import Input from '@/components/Input.component'
import { EmployeeSchema, TEmployeeSchema } from '../schema/employee.schema'

interface EmployeeModalProps {
  isOpen: boolean
  close: (isOpen: boolean) => void
  user: Omit<User, 'password'> | null
  modalType: 'edit' | 'view' | 'add'
  changeToEdit: () => void
  changeToView: () => void
  createUser: (user: Omit<User, 'id' | 'password'>) => void
  editUser: (user: Omit<User, 'password'>) => void
}

const EmployeeModal = ({
  isOpen,
  close,
  user,
  modalType,
  changeToEdit,
  changeToView,
  createUser,
  editUser
}: EmployeeModalProps) => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
    handleSubmit,
    reset
  } = useForm<TEmployeeSchema>({
    resolver: zodResolver(EmployeeSchema)
  })

  useEffect(() => {
    if (user) {
      setValue('fullname', user.fullname)
      setValue('username', user.username)
      setValue('status', user.status)
    }
  }, [user, setValue, modalType])

  const handleOnSubmit = (employee: TEmployeeSchema) => {
    if (modalType === 'edit' && user) {
      editUser({ id: user.id, ...employee })
      close(false)
      reset()
    }
    if (modalType === 'add') {
      // TODO: Eliminar el password and "as" keyboard cuando se agregue la funcionalidad de autogenerado por el backend
      createUser({ ...employee, password: '123456789' } as Omit<User, 'password' | 'id'>)
      close(false)
      reset()
    }
  }

  const handleChange = () => {
    if (modalType === 'edit') changeToView()
    if (modalType === 'view') changeToEdit()
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={close}>
      <AlertDialogContent className='absolute max-w-md'>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center'>
              {modalType === 'view' && 'Empleado'}
              {modalType === 'edit' && 'Editar Empleado'}
              {modalType === 'add' && 'Agregar Empleado'}
            </AlertDialogTitle>
            <AlertDialogDescription className='text-primary'>
              <Input
                hookForm={register('fullname')}
                label='Nombre'
                error={errors.fullname}
                readOnly={modalType === 'view'}
              />
              <Input
                hookForm={register('username')}
                label='Nombre de Usuario'
                error={errors.username}
                readOnly={modalType === 'view'}
              />
              {modalType !== 'add' && (
                <div className='flex items-center gap-2'>
                  <p>Estado: </p>
                  {modalType !== 'view' ? (
                    <Controller
                      name='status'
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={checked => {
                            field.onChange(checked)
                          }}
                        />
                      )}
                    />
                  ) : (
                    <Badge
                      variant={user?.status ? 'success' : 'destructive'}
                      size='lg'
                      className='!mt-0'
                    >
                      {user?.status ? 'Activo' : 'Inactivo'}
                    </Badge>
                  )}
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>

          {modalType !== 'add' && (
            <Button
              variant='ghost'
              className='absolute right-3 top-2 w-fit rounded-full px-2'
              type='button'
              onClick={handleChange}
            >
              {modalType === 'edit' ? (
                <Eye className='cursor-pointer text-success' />
              ) : (
                <PencilIcon className='cursor-pointer text-warning' />
              )}
            </Button>
          )}
          <AlertDialogFooter>
            {modalType === 'add' && (
              <>
                <AlertDialogAction>Cancelar</AlertDialogAction>
                <Button type='submit'>Agregar</Button>
              </>
            )}
            {modalType === 'edit' && (
              <>
                <AlertDialogAction>Cancelar</AlertDialogAction>
                <Button type='submit'>Actualizar</Button>
              </>
            )}
            {modalType === 'view' && <AlertDialogAction>Cerrar</AlertDialogAction>}
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default EmployeeModal
