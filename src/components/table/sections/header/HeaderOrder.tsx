import { CustomerFilterState } from '@/store/customerFilterSlice.store'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface HeaderProps {
  label: string
  onClick: (index: number) => void
  index: number
  filter: CustomerFilterState
  keyString: string
}

const HeaderOrder = ({ label, index, onClick, filter, keyString }: HeaderProps) => {
  const handleClick = (index: number) => {
    onClick(index)
  }

  return (
    <button
      className='relative flex select-none items-center gap-2 rounded pr-1 transition-colors hover:bg-white/10'
      onClick={() => handleClick(index)}
    >
      <span>{label}</span>
      <div className='flex flex-col'>
        <ChevronUp
          size={15}
          className={
            keyString === filter.orderBy?.key && filter.orderBy?.order === 'asc'
              ? 'text-white'
              : 'text-gray-500'
          }
        />
        <ChevronDown
          size={15}
          className={
            keyString === filter.orderBy?.key && filter.orderBy?.order === 'desc'
              ? 'text-white'
              : 'text-gray-500'
          }
        />
      </div>
    </button>
  )
}

export default HeaderOrder
