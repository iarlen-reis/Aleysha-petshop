import React, { ComponentProps } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface TextAreaFieldProps extends ComponentProps<'textarea'> {
  name: string
  label?: string
  rules?: Record<string, string>
  defaultValue?: string
}

const TextAreaInput = ({
  name,
  label,
  rules,
  className,
  defaultValue,
  ...rest
}: TextAreaFieldProps) => {
  const { control } = useFormContext()

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    rules,
    control,
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
      <textarea
        ref={ref}
        {...inputProps}
        data-testid={name}
        {...rest}
        cols={10}
        rows={5}
        className={twMerge(
          'p-2 px-3 font-ruluko text-lg rounded-md bg-background-input border border-black/20 md:py-3 disabled:bg-zinc-400 disabled:animate-pulse',
          className,
        )}
      />
      {error && (
        <small className="font-ruluko text-red-500">{error.message}</small>
      )}
    </fieldset>
  )
}

export default TextAreaInput
