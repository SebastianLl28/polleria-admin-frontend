import { useMemo } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
import { ITable } from './interfaces/ITable'
import BodyTable from './sections/body/BodyTable'
import HeaderTable from './sections/header/HeaderTable'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { Label } from '../ui/label'

const Table = <T,>({ header, data, actions, rowClick, filter, setFilter }: ITable<T>) => {
  const totalPages = useMemo(() => {
    if (!Array.isArray(data)) {
      return data.totalPages
    }
    return 1
  }, [data])

  const handlePageChange = (page: number) => {
    setFilter({ page: page - 1 })
  }

  const handleSizeChange = (size: string) => {
    setFilter({ size: Number(size), page: 0 })
  }

  return (
    <>
      <table className='w-full'>
        <HeaderTable header={header} filter={filter} setFilter={setFilter} />
        <BodyTable
          header={header}
          data={data}
          actions={actions}
          rowClick={rowClick}
          filter={filter}
          setFilter={setFilter}
        />
      </table>
      <div className='ml-auto flex w-full items-end justify-between'>
        <div className='flex flex-wrap items-center gap-3'>
          <Label className='flex-grow-0 text-sm' htmlFor='rows'>
            Filas por página:
          </Label>
          <Select value={String(filter.size)} onValueChange={handleSizeChange}>
            <SelectTrigger className='w-20' id='rows'>
              {filter.size}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='5'>5</SelectItem>
              <SelectItem value='10'>10</SelectItem>
              <SelectItem value='15'>15</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ResponsivePagination
          total={totalPages}
          current={filter.page + 1}
          onPageChange={page => handlePageChange(page)}
          className='mt-4 flex select-none justify-center'
          pageLinkClassName='flex items-center justify-center w-8 h-8 mx-1 text-sm text-primary bg-white border border-slate-200 rounded-md hover:bg-slate-200 lg:text-base lg:w-10 lg:h-10'
          activeItemClassName='[&>a]:bg-slate-200'
          disabledItemClassName='[&>span]:bg-slate-100 [&>span]:text-slate-300 [&>span]:hover:bg-slate-100 [&>span]:cursor-not-allowed'
        />
        {/* <p className='absolute bottom-0 -translate-y-20'>
          {JSON.stringify(filter, null, 2)}
        </p> */}
      </div>
    </>
  )
}

export default Table
