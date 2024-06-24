import Input from '@/components/Input.component'
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
import { User } from '@/model/User.model'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, PencilIcon } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'
import { EmployeeSchema, TEmployeeSchema } from '../schema/employee.schema'
import { useEffect } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { usePutUser } from '@/hooks/user.hook'

interface EmployeeModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  user: Omit<User, 'password'> | null
  isEdit: boolean
  setIsEdit: () => void
}

const EmployeeModal = ({
  isOpen,
  setIsOpen,
  user,
  isEdit,
  setIsEdit
}: EmployeeModalProps) => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
    handleSubmit
  } = useForm<TEmployeeSchema>({
    resolver: zodResolver(EmployeeSchema)
  })

  useEffect(() => {
    if (user) {
      setValue('fullname', user.fullname)
      setValue('username', user.username)
      setValue('status', user.status)
    }
  }, [user, setValue, isEdit])

  const { mutate } = usePutUser()

  const handleOnSubmit = (employee: TEmployeeSchema) => {
    if (isEdit && user) {
      mutate({ id: user.id, ...employee })
      setIsOpen(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className='absolute max-w-md'>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center'>
              {isEdit ? 'Editar Empleado' : 'Empleado'}
            </AlertDialogTitle>
            <AlertDialogDescription className='text-primary'>
              <Input
                hookForm={register('fullname')}
                label='Nombre'
                error={errors.fullname}
                readOnly={!isEdit}
              />
              <Input
                hookForm={register('username')}
                label='Nombre de Usuario'
                error={errors.username}
                readOnly={!isEdit}
              />
              <div className='flex items-center gap-2'>
                <p>Estado: </p>
                {isEdit ? (
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
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Button
            variant='ghost'
            className='absolute right-3 top-2 w-fit rounded-full px-2'
            type='button'
            onClick={setIsEdit}
          >
            {isEdit ? (
              <Eye className='cursor-pointer text-success' />
            ) : (
              <PencilIcon className='text-warning cursor-pointer' />
            )}
          </Button>
          <AlertDialogFooter>
            {isEdit ? (
              <>
                <AlertDialogAction>Cancelar</AlertDialogAction>
                <Button type='submit'>Actualizar</Button>
              </>
            ) : (
              <AlertDialogAction>Cerrar</AlertDialogAction>
            )}
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default EmployeeModal
