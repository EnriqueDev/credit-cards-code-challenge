import * as React from 'react'
import Select from 'react-select'
import { ErrorText } from './ErrorText'

type SelectValue = { value: string; label: string }[]

interface IProps {
  placeholder: string
  options: { value: string; label: string }[]
  onChange: (value: SelectValue) => void
  error: string | null
}

export const Dropdown: React.FC<IProps> = ({
  placeholder,
  options,
  onChange,
  error,
}) => {
  return (
    <>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange as any}
      />
      {Boolean(error) && <ErrorText error={error} />}
    </>
  )
}
