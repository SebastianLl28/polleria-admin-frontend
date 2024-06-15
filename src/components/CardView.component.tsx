import { Grip } from 'lucide-react'
import { Button } from './ui/button'

interface CardViewProps {
  isCardView: boolean
  setIsCardView: (state: boolean) => void
}

const ButtonCardView = ({ isCardView, setIsCardView }: CardViewProps) => {
  return (
    <Button
      variant='ghost'
      className={`relative top-2 mt-auto space-x-2 px-4 ${isCardView && 'bg-slate-100'}`}
      onClick={() => setIsCardView(!isCardView)}
    >
      <Grip size={16} />
      <span className=''>Card View</span>
    </Button>
  )
}

export default ButtonCardView
