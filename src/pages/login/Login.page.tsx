import Input from '@/components/Input.component'
import { Card } from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { LoginSchema, loginSchema } from './schema/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const navigate = useNavigate()

  const onSubmit = (data: LoginSchema): void => {
    console.log(data)
    navigate('/dashboard')
  }

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <Card className='w-full max-w-md p-6 shadow-md'>
        <h2 className='mb-3 text-center text-3xl font-bold'>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Correo Electrónico'
            type='text'
            hookForm={register('email')}
            error={errors.email}
          />
          <Input
            label='Contraseña'
            type='password'
            hookForm={register('password')}
            error={errors.password}
          />
          <Button type='submit'>Iniciar Sesión</Button>
        </form>
      </Card>
    </main>
  )
}

export default LoginPage
