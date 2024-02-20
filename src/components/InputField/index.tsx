import React, { ComponentProps } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputFieldProps extends ComponentProps<'input'> {
  name: string
  label?: string
  rules?: Record<string, string>
  defaultValue?: string | number
}

const InputField = ({
  name,
  label,
  type,
  rules,
  className,
  defaultValue,
  ...rest
}: InputFieldProps) => {
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
      <input
        type={type}
        ref={ref}
        {...inputProps}
        data-testid={name}
        {...rest}
        autoComplete="off"
        className={twMerge(
          'p-2 px-3 font-ruluko text-lg rounded-md bg-background-input border border-black/20 md:py-3 disabled:bg-zinc-400 disabled:animate-pulse',
          className,
        )}
      />
      {error && (
        <small className=" font-ruluko text-red-500">{error.message}</small>
      )}
    </fieldset>
  )
}

export default InputField
