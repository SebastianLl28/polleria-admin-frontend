import { Outlet } from 'react-router-dom'
import Aside from './shared/Aside'

const ConfigPage = () => {
  return (
    <main className='w-full p-12'>
      <h2 className='mb-12 text-center text-4xl font-bold'>Configuración</h2>
      <div className='flex w-full justify-center gap-6'>
        <aside className='w-full max-w-56 text-slate-600'>
          <Aside />
        </aside>
        <section className='w-full max-w-3xl rounded-md border p-4'>
          <Outlet />
        </section>
      </div>
    </main>
  )
}

export default ConfigPage
