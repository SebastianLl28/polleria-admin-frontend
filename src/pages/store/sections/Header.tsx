import ButtonCardView from '@/components/CardView.component'

interface HeaderProps {
  isCardView: boolean
  setIsCardView: (value: boolean) => void
}

const Header = ({ isCardView, setIsCardView }: HeaderProps) => {
  return (
    <header>
      <div className='flex space-x-4'>
        <h2 className='text-4xl font-bold'>Tiendas</h2>
        <ButtonCardView isCardView={isCardView} setIsCardView={setIsCardView} />
      </div>
    </header>
  )
}

export default Header
