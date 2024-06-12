import { NavLink } from 'react-router-dom'
import { routers } from './utils/routers'
import { APP_ROUTER } from '@/routers'
import { DoorClosed } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside
      id='sidebar'
      className='left-0 top-0 z-40 h-screen w-64 transition-transform'
      aria-label='Sidebar'
    >
      <div className='flex h-full flex-col overflow-y-auto border-r border-slate-200 px-3 py-4 dark:border-slate-700 dark:bg-slate-900'>
        <div className='mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white'>
          <img
            src='https://cdn-icons-png.flaticon.com/128/1046/1046773.png'
            alt='icon nose'
            className='w-14'
          />
          <span className='ml-3 text-base font-bold'>Polleria</span>
        </div>
        <ul className='space-y-2 text-sm font-medium'>
          {routers.map((element, index) => (
            <li key={index}>
              <NavLink
                to={element.path}
                className='flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100'
              >
                <element.Icon className='h-5 w-5' />
                <span className='ml-3 flex-1 whitespace-nowrap'>{element.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className='mt-auto flex'>
          <li className='w-full'>
            <NavLink
              to={APP_ROUTER.DASHBOARD}
              className='flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100'
            >
              <DoorClosed />
              <span className='ml-3 flex-1 whitespace-nowrap'>Cerrar Sesión</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
