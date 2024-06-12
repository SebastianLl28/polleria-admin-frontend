import Input from '@/components/Input.component'
import { useForm } from 'react-hook-form'
import { SecuritySchema, securitySchema } from './schema/security.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'

const Security = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SecuritySchema>({
    resolver: zodResolver(securitySchema)
  })

  const onSubmit = (data: SecuritySchema): void => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Contraseña Actual'
        hookForm={register('oldPassword')}
        error={errors.oldPassword}
      />
      <Input
        label='Nueva Contraseña'
        hookForm={register('password')}
        error={errors.password}
      />
      <Input
        label='Confirmar Contraseña'
        hookForm={register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <Button type='submit' className='mt-2'>
        Guardar
      </Button>
    </form>
  )
}

export default Security
