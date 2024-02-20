import { twMerge } from 'tailwind-merge'
import React, { ComponentProps } from 'react'
import { useController, useFormContext } from 'react-hook-form'

interface SelectFieldProps extends ComponentProps<'select'> {
  name: string
  label?: string
  rules?: Record<string, string>
  defaultValue?: string
  options: Record<string, string>[]
}

const SelectField = ({
  name,
  label,
  rules,
  className,
  defaultValue,
  options,
  ...rest
}: SelectFieldProps) => {
  const { control } = useFormContext()

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue || '',
  })

  return (
    <fieldset className="flex w-full flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className="font-ruluko text-base uppercase sm:text-lg"
        >
          {label}:
        </label>
      )}
      <select
        ref={ref}
        {...inputProps}
        data-testid={name}
        {...rest}
        autoComplete="off"
        className={twMerge(
          'p-3 font-ruluko text-lg rounded-md bg-background-input border border-black/20 md:py-3 disabled:bg-zinc-400 disabled:animate-pulse',
          className,
        )}
      >
        <>
          <option value="">Selecione</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </>
      </select>
      {error && (
        <small className=" font-ruluko text-red-500">{error.message}</small>
      )}
    </fieldset>
  )
}

export default SelectField
