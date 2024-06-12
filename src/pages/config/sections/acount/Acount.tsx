import Input from '@/components/Input.component'
import { useForm } from 'react-hook-form'
import { AcountSchema, acountSchema } from './schema/acount.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'

const Acount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AcountSchema>({
    resolver: zodResolver(acountSchema)
  })

  const onSubmit = (data: AcountSchema): void => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label='Username' hookForm={register('userName')} error={errors.userName} />
      <Input
        label='Nombre Completo'
        hookForm={register('fullName')}
        error={errors.fullName}
      />
      <Button type='submit'>Guardar</Button>
    </form>
  )
}

export default Acount