import { MultiSelect, SelectProps } from 'react-multi-select-component'

const InputMultiSelect = ({ ...args }: SelectProps) => {
  return <MultiSelect hasSelectAll={false} disableSearch {...args} />
}

export default InputMultiSelect
