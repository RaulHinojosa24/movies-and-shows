export default function Select ({ name, label, options, defaultValue, value, compact, bgClass, ...props }) {
  return (
    <>
      {!compact &&
        <div className='w-fit space-y-1'>
          {label &&
            <label htmlFor={name} className='text-nowrap'>{label}
            </label>}
          <select
            name={name} id={name} value={value || undefined} {...props} defaultValue={!value ? defaultValue || options[0].value : undefined}
            className={`rounded py-1 px-2 pr-4 cursor-pointer shadow shadow-colors w-full ${bgClass || 'bg-transparent'}`}
          >
            {options.map((option) => (
              <option
                key={option.value} value={option.value}
                className='bg-light-1 dark:bg-dark-2'
              >{option.label}
              </option>
            ))}
          </select>
        </div>}
      {compact &&
        <div className='relative shadow shadow-colors rounded w-fit h-fit grow'>
          <label
            htmlFor={name} className={`absolute px-2 left-1 text-xs -translate-y-[calc(3/5*100%)] max-w-[90%] whitespace-nowrap overflow-hidden ${bgClass || 'bg-transparent'}`}
          >{label}
          </label>
          <select
            name={name} id={name} value={value || undefined} {...props} defaultValue={!value ? defaultValue || options[0].value : undefined}
            className={`${bgClass || 'bg-transparent'} rounded py-1 px-2 pr-4 cursor-pointer w-full`}
          >
            {options.map((option) => (
              <option
                key={option.value} value={option.value}
                className='bg-light-1 dark:bg-dark-2'
              >{option.label}
              </option>
            ))}
          </select>
        </div>}
    </>
  )
}
