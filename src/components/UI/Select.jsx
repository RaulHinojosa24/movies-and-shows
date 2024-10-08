export default function Select ({ name, label, options, defaultValue, value, compact, ...props }) {
  return (
    <>
      {!compact &&
        <div className='w-fit space-y-1'>
          {label &&
            <label htmlFor={name} className='text-nowrap'>{label}
            </label>}
          <select
            name={name} id={name} value={value || undefined} {...props} defaultValue={!value ? defaultValue || options[0].value : undefined}
            className='bg-transparent rounded py-1 px-2 pr-4 cursor-pointer custom-shadow-small w-full'
          >
            {options.map((option) => (
              <option
                key={option.value} value={option.value}
                className='dark:bg-neutral-900 dark:active:bg-neutral-800'
              >{option.label}
              </option>
            ))}
          </select>
        </div>}
      {compact &&
        <div className='relative custom-shadow-small rounded w-fit h-fit grow'>
          <label
            htmlFor={name} className='absolute px-2 left-1 text-xs dark:text-neutral-300 bg-gradient-to-b dark:from-neutral-950 from-white from-[calc(3/5*100%-1px)] to-[calc(3/5*100%-1px)] dark:to-neutral-900 to-white -translate-y-[calc(3/5*100%)] max-w-[90%] whitespace-nowrap overflow-hidden'
          >{label}
          </label>
          <select
            name={name} id={name} value={value || undefined} {...props} defaultValue={!value ? defaultValue || options[0].value : undefined}
            className='bg-transparent rounded py-1 px-2 pr-4 cursor-pointer w-full'
          >
            {options.map((option) => (
              <option
                key={option.value} value={option.value}
                className='dark:bg-neutral-900 dark:active:bg-neutral-800'
              >{option.label}
              </option>
            ))}
          </select>
        </div>}
    </>
  )
}
