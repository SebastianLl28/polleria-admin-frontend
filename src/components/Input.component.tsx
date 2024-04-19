import { useId } from 'react'
import { Input as InputUi } from './ui/input'
import { Label } from './ui/label'
import { UseFormRegisterReturn, FieldError } from 'react-hook-form'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  hookForm: UseFormRegisterReturn<string>
  error?: FieldError | undefined
}

const Input = ({ label, hookForm, error, className, ...args }: InputProps) => {
  const id = useId()

  return (
    <div className='relative mb-2 w-full pb-px'>
      {label ? (
        <Label htmlFor={id} className={`font-semibold ${error ? 'text-red-500' : ''}`}>
          {label}
        </Label>
      ) : null}
      <InputUi
        id={id}
        {...hookForm}
        {...args}
        className={cn(
          'mb-4 mt-1 w-full rounded border',
          className,
          error
            ? 'border-red-500 focus:outline-red-500 focus-visible:outline-red-500'
            : ''
        )}
      />
      {error ? (
        <span className='absolute bottom-0 left-0 text-xs text-red-500'>
          {error.message}
        </span>
      ) : null}
    </div>
  )
}

export default Input
