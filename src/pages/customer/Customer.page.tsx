import { IHeader } from './interface/IHeader'
import Header from './sections/Header'
import Table from './table/Table'

const data = [
  {
    id: '1',
    name: 'John',
    lastname: 'Doe',
    email: 'llamucasebas@gmail.com',
    birthdate: '1990-01-01',
    status: true
  },
  {
    id: '2',
    name: 'Jane',
    lastname: 'Doe',
    email: 'janeDoegmail.com',
    birthdate: '1990-01-01',
    status: false
  },
  {
    id: '3',
    name: 'Jorge',
    lastname: 'Doe',
    email: 'jorgeDoegmail.com',
    birthdate: '1990-01-01',
    status: true
  }
]

const handleClick = (item: string) => {
  console.log(item)
}

const CustomerPage = () => {
  //TODO: en el header meter, lo que va a ir en la data
  //TODO: si o si tengo que capturar el id, asi que no sería ocultarlo
  const headers: IHeader[] = [
    {
      key: 'id',
      label: 'ID',
      overflow: 'hidden',
      size: 1
    },
    {
      key: 'name',
      label: 'Name',
      overflow: 'visible',
      size: 2.5,
      action: handleClick
    },
    {
      key: 'lastname',
      label: 'Apellido',
      overflow: 'visible',
      size: 2.5
    },
    {
      key: 'email',
      label: 'Email',
      overflow: 'hidden',
      size: 3
    },
    {
      key: 'birthdate',
      label: 'Cumpleaños',
      overflow: 'visible',
      size: 2
    },
    {
      key: 'status',
      label: 'Estado',
      overflow: 'visible',
      render: (value: boolean) => {
        return (
          <span
            className={`rounded-md px-2 py-1 text-white ${value ? 'bg-green-500' : 'bg-destructive'}`}
          >
            {value ? 'Activo' : 'Inactivo'}
          </span>
        )
      },
      size: 2
    }
  ]

  return (
    <main className='space-y-12 p-12'>
      <Header />
      <Table header={headers} data={data} />
    </main>
  )
}

export default CustomerPage
