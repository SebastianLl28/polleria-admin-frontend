import {
  LineChart as LineChartComponent,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts'
const LineChart = () => {
  const data = [
    { name: 'Enero', uv: 100, pv: 2400, amt: 2400 },
    {
      name: 'Febrero',
      uv: 300,
      pv: 1398,
      amt: 2210
    },
    { name: 'Marzo', uv: 200, pv: 9800, amt: 2290 },
    {
      name: 'Abril',
      uv: 230,
      pv: 3908,
      amt: 2000
    },
    { name: 'Mayo', uv: 189, pv: 4800, amt: 2181 },
    {
      name: 'Junio',
      uv: 239,
      pv: 3800,
      amt: 2500
    },
    { name: 'Julio', uv: 500, pv: 4300, amt: 2100 }
  ]
  return (
    <div className='flex h-full w-full flex-col gap-6'>
      <h2 className='text-center text-4xl font-bold'>Ventas</h2>
      <div className='h-full w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChartComponent data={data}>
            <Line type='monotone' dataKey='uv' stroke='#3B82F6' />
            <CartesianGrid stroke='#ccc' />
            <XAxis dataKey='name' />
            <YAxis />
          </LineChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default LineChart
