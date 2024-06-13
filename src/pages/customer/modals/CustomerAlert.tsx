import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Customer } from '@/model/Customer.model'
import Input from '@/components/Input.component'
import { AddCustomerSchema, addCustomerSchema } from '../schema/customer.schema'

interface AddCustomerProps {
  isOpen: boolean
  closeDialog: () => void
  customer: Customer | null
}

const CustomerAlert = ({ isOpen, closeDialog, customer }: AddCustomerProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AddCustomerSchema>({
    resolver: zodResolver(addCustomerSchema),
    defaultValues: {
      name: customer?.name || '',
      lastname: customer?.lastname || '',
      birthdate: '2021-09-01',
      email: customer?.email || '',
      password: customer?.password || '',
      status: customer?.status || 'ACTIVE'
    }
  })

  const handleOnSubmit = (data: AddCustomerSchema) => {
    console.log(data)
  }

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogTitle className='text-center'>Cliente</AlertDialogTitle>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          noValidate
          className='grid grid-cols-2 gap-x-4'
        >
          <Input
            label='Nombre'
            name='name'
            type='text'
            hookForm={register('name')}
            error={errors.name}
            readOnly
          />
          <Input
            label='Apellido'
            name='lastname'
            type='text'
            hookForm={register('lastname')}
            error={errors.lastname}
            readOnly
          />
          <Input
            label='Fecha de Nacimiento'
            name='birthdate'
            type='text'
            hookForm={register('birthdate')}
            error={errors.birthdate}
            classNameContainer='col-span-2'
            readOnly
          />
          <Input
            label='Correo Electrónico'
            name='email'
            type='email'
            hookForm={register('email')}
            error={errors.email}
            classNameContainer='col-span-2'
            readOnly
          />
          <Input
            label='Contraseña'
            name='password'
            type='password'
            hookForm={register('password')}
            error={errors.password}
            classNameContainer={`col-span-2 ${customer ? 'hidden' : ''}`}
            readOnly
          />
          <div className={`mb-2 flex items-center gap-4 ${!customer ? 'hidden' : ''}`}>
            <Label className='pb-1'>
              Estado:{' '}
              {customer?.status === 'ACTIVE' && (
                <span className='rounded-md bg-green-500 px-2 py-1 text-white'>
                  Activo
                </span>
              )}
              {customer?.status === 'BLOCKED' && (
                <span className='rounded-md bg-destructive px-2 py-1 text-white'>
                  Inactivo
                </span>
              )}
              {customer?.status === 'UNVERIFIED' && (
                <span className='rounded-md bg-yellow-500 px-2 py-1 text-white'>
                  No verificado
                </span>
              )}
            </Label>
          </div>
          <span className='absolute bottom-1 text-gray-300'>
            Mostrar las direcciones y productos favoritos in coming soon
          </span>
          <AlertDialogFooter className='col-span-2'>
            <Button type='button' onClick={closeDialog}>
              Cerrar
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomerAlert
