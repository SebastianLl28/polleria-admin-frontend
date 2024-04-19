import { IHeader } from '../interface/IHeader'

interface HeaderProps {
  header: IHeader[]
}

const Header = ({ header }: HeaderProps) => {
  return (
    <div
      className='grid w-full rounded-md bg-slate-200 font-semibold shadow'
      style={{
        gridTemplateColumns: header.map(item => `${item.size}fr`).join(' ')
      }}
    >
      {header.map((item, index) => (
        <div key={index} className='py-2 text-center text-lg'>
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default Header
