import { useEffect, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'

interface InputMultiSelectProps {
  options: {
    value: string
    label: string
  }[]
  label: string
}

const InputMultiSelect = ({ options, label }: InputMultiSelectProps) => {
  const [selected, setSelected] = useState([])

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <MultiSelect
      options={options}
      value={selected}
      onChange={setSelected}
      hasSelectAll={false}
      disableSearch
      labelledBy={label}
      overrideStrings={{
        selectSomeItems: label
      }}
    />
  )
}

export default InputMultiSelect
