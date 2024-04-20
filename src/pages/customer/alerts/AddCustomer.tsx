import Input from '@/components/Input.component'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { AddCustomerSchema, addCustomerSchema } from '../schema/customer.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { usePostCustomer } from '@/hooks/customer.hook'
import { formattedDate } from '@/lib/formattedDate.lib'

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AddCustomerSchema>({
    resolver: zodResolver(addCustomerSchema)
  })

  const [isOpen, setIsOpen] = useState(false)

  const { mutate, isPending } = usePostCustomer()

  const handleOnSubmit = (data: AddCustomerSchema) => {
    const { name, lastname, birthdate, email, password } = data
    const birthdateFormatted = formattedDate(birthdate)
    mutate({ name, lastname, birthdate: birthdateFormatted, email, password })
    setIsOpen(false)
    reset()
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <Button className='space-x-2 text-white' type='button'>
          <Plus size={16} />
          <span>Crear Cliente</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle className='text-center'>Crear Cliente</AlertDialogTitle>
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
          />
          <Input
            label='Apellido'
            name='lastname'
            type='text'
            hookForm={register('lastname')}
            error={errors.lastname}
          />
          <Input
            label='Fecha de Nacimiento'
            name='birthdate'
            type='date'
            hookForm={register('birthdate', { valueAsDate: true })}
            error={errors.birthdate}
            classNameContainer='col-span-2'
          />

          <Input
            label='Correo Electrónico'
            name='email'
            type='email'
            hookForm={register('email')}
            error={errors.email}
            classNameContainer='col-span-2'
          />
          <Input
            label='Contrasena'
            name='password'
            type='password'
            hookForm={register('password')}
            error={errors.password}
            classNameContainer='col-span-2'
          />
          <AlertDialogFooter className='col-span-2'>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <Button type='submit' disabled={isPending}>
              Crear
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddCustomer
