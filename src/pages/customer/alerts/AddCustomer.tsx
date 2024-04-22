import Input from '@/components/Input.component'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useForm, Controller } from 'react-hook-form'
import { AddCustomerSchema, addCustomerSchema } from '../schema/customer.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Customer } from '@/model/Customer.model'
import { useEffect } from 'react'
import { Label } from '@/components/ui/label'

interface AddCustomerProps {
  isOpen: boolean
  closeDialog: () => void
  customer: Customer | null
  actionEdit: (customer: Customer) => void
  actionAdd: (customer: Omit<Customer, 'status' | 'id'>) => void
  isPending: boolean
}

const AddCustomer = ({
  isOpen,
  closeDialog,
  customer,
  isPending
  // actionAdd,
  // actionEdit
}: AddCustomerProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    unregister,
    control
  } = useForm<AddCustomerSchema>({
    resolver: zodResolver(addCustomerSchema),
    defaultValues: {
      name: customer?.name || '',
      lastname: customer?.lastname || '',
      birthdate: customer?.birthdate || '',
      email: customer?.email || '',
      password: customer?.password || '',
      status: customer?.status || false
    }
  })

  useEffect(() => {
    if (customer) {
      console.log('entro 1')
      unregister('password')
    } else {
      console.log('entro 2')
      unregister('status')
    }
  }, [customer, unregister])

  const handleOnSubmit = (data: AddCustomerSchema) => {
    console.log(data)
    // const { name, lastname, birthdate, email, password } = data
    // const birthdateFormatted = formattedDate(birthdate)
    // console.log('asdas')
    // if (customer) {
    // actionEdit({
    //    name,
    //   lastname,
    //   birthdate: birthdateFormatted,
    //   email,
    //   password,
    //   id: customer.id,
    //   status: customer.status
    // })
    // console.log(getValues('birthdate'))
    // } else {
    //   actionAdd({ name, lastname, birthdate: birthdateFormatted, email, password })
    // }
    // closeDialog()
    // reset()
  }

  console.log(errors)

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogTitle className='text-center'>
          {customer ? 'Editar Cliente' : 'Crear Cliente'}
        </AlertDialogTitle>
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
          {customer === null ? (
            <Input
              label='Contraseña'
              name='password'
              type='password'
              hookForm={register('password')}
              error={errors.password}
              classNameContainer='col-span-2'
            />
          ) : (
            <div className='mb-2 flex items-center gap-4'>
              <Label className='pb-1'>Estado</Label>
              <Controller
                name='status'
                control={control}
                render={({ field }) => (
                  <input
                    type='checkbox'
                    checked={field.value}
                    onChange={e => {
                      field.onChange(e.target.checked)
                    }}
                  />
                )}
              />
            </div>
          )}
          <AlertDialogFooter className='col-span-2'>
            <Button type='button' variant='outline' onClick={closeDialog}>
              Cancelar
            </Button>
            <Button type='submit' disabled={isPending}>
              {customer ? 'Editar' : 'Crear'}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddCustomer
