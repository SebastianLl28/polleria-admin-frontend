import { ChevronDown, ChevronUp } from 'lucide-react'

interface HeaderProps {
  label: string
  onClick: (index: number) => void
  index: number
  order: 'ASC' | 'DESC' | null
  onSortAsc: () => void
  onSortDesc: () => void
  onSortRemove: () => void
}

const HeaderOrder = ({
  label,
  onClick,
  index,
  order,
  onSortAsc,
  onSortDesc,
  onSortRemove
}: HeaderProps) => {
  const handleClick = (index: number) => {
    onClick(index)
    if (order === 'ASC') onSortDesc()
    if (order === 'DESC') onSortRemove()
    if (order === null) onSortAsc()
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
          className={order === 'ASC' ? 'text-white' : 'text-gray-500'}
        />
        <ChevronDown
          size={15}
          className={order === 'DESC' ? 'text-white' : 'text-gray-500'}
        />
      </div>
    </button>
  )
}

export default HeaderOrder
