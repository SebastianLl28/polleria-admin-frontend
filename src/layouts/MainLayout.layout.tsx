import Sidebar from '@/shared/sidebar/Sidebar.shared'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className='grid max-h-svh w-screen grid-cols-[auto,1fr] overflow-x-hidden'>
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default MainLayout
