import { BadgeDollarSign, ShoppingBag, ShoppingBasket, UsersRound } from 'lucide-react'

const Header = () => {
  return (
    <header className='grid grid-cols-4 gap-14'>
      <div className='grid grid-cols-[1fr,auto] rounded bg-gray-50/10 p-6 shadow'>
        <div className=''>
          <p className='text-xl font-semibold text-gray-400'>Productos</p>
          <div className='flex items-end'>
            <p className='text-6xl font-extrabold'>230</p>
          </div>
        </div>
        <div className='self-center'>
          <div className='flex size-12 rounded-md bg-blue-500'>
            <ShoppingBasket className='m-auto size-8/12 text-xl text-white' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-[1fr,auto] rounded bg-gray-50/10 p-6 shadow'>
        <div className=''>
          <p className='text-xl font-semibold text-gray-400'>Usuarios</p>
          <div className='flex items-end'>
            <p className='text-6xl font-extrabold'>1200</p>
          </div>
        </div>
        <div className='self-center'>
          <div className='flex size-12 rounded-md bg-blue-500'>
            <UsersRound className='m-auto size-8/12 text-xl text-white' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-[1fr,auto] rounded bg-gray-50/10 p-6 shadow'>
        <div className=''>
          <p className='text-xl font-semibold text-gray-400'>Ventas</p>
          <div className='flex items-end'>
            <p className='text-6xl font-extrabold'>-1</p>
          </div>
        </div>
        <div className='self-center'>
          <div className='flex size-12 rounded-md bg-blue-500'>
            <ShoppingBag className='m-auto size-8/12 text-xl text-white' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-[1fr,auto] rounded bg-gray-50/10 p-6 shadow'>
        <div className=''>
          <p className='text-xl font-semibold text-gray-400'>Ganancias</p>
          <div className='flex items-end'>
            <p className='text-6xl font-extrabold'>$230</p>
          </div>
        </div>
        <div className='self-center'>
          <div className='flex size-12 rounded-md bg-blue-500'>
            <BadgeDollarSign className='m-auto size-8/12 text-xl text-white' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
