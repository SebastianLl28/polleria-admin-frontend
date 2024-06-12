import { CircleUserRound, Lock } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  const asideList = [
    {
      id: 1,
      title: 'Cuenta',
      link: '/settings/account',
      icon: <CircleUserRound size={20} />
    },
    {
      id: 2,
      title: 'Seguridad',
      link: '/settings/security',
      icon: <Lock size={20} />
    }
  ]

  return (
    <>
      <p className='mb-2 text-sm'>Personal</p>
      <ul className='select-none space-y-2'>
        {asideList.map(item => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex w-full items-center gap-1.5 rounded-md px-3 py-2 font-semibold hover:bg-slate-200 hover:text-black ${isActive ? 'bg-slate-200 text-black' : ''}`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Aside
