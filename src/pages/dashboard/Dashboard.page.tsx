import Header from './sections/Header'
import LineChart from './sections/LineChart'

const DashboardPage = () => {
  return (
    <main className='grid grid-rows-[auto,1fr]'>
      <div className='p-12'>
        <Header />
      </div>
      <section className='grid h-full grid-cols-2 grid-rows-2 gap-14 px-12'>
        <div className='h-[30rem] w-full bg-gray-50/10 p-6 shadow'>
          <LineChart />
        </div>
        <div className='row-span-2 pb-12'>
          <div className='row-span-2 h-full overflow-y-scroll bg-gray-50/10 p-6 shadow'>
            <h2 className='text-center text-4xl font-bold'>Notificaciones</h2>
          </div>
        </div>
        <div className='pb-12'>
          <div className='h-full overflow-y-scroll bg-gray-50/10 p-6 shadow'>
            <h2 className='text-center text-4xl font-bold'>Comentarios</h2>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DashboardPage
