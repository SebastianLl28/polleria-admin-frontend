import { IHeader } from '../interfaces/ITable'

interface HeaderProps {
  header: IHeader[]
}

const Header = ({ header }: HeaderProps) => {
  return (
    <div
      className='grid w-full rounded-md bg-primary font-semibold text-primary-foreground'
      style={{
        gridTemplateColumns:
          header
            .filter(item => item.overflow === 'visible')
            .map(item => `${item.size}fr`)
            .join(' ') + ' 4rem'
      }}
    >
      {header.map((item, index) => (
        <div
          key={index}
          className={`px-4 py-2 text-lg ${item.overflow === 'hidden' ? 'hidden' : ''}`}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default Header
