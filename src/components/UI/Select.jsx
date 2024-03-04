export default function Select ({ name, label, options, ...props }) {
  return (
    <div className='relative custom-shadow-small'>
      <label
        htmlFor={name} className='absolute px-2 left-1 text-xs text-neutral-300 bg-gradient-to-b from-neutral-950 from-[calc(3/5*100%-1px)] to-[calc(3/5*100%-1px)] to-neutral-900 -translate-y-[calc(3/5*100%)] max-w-[90%] whitespace-nowrap overflow-hidden overflow-ellipsis'
      >{label}
      </label>
      <select
        name={name} id={name} {...props} defaultValue={options[0].value}
        className='bg-transparent rounded py-1 px-2 pr-8 cursor-pointer'
      >
        {options.map((option) => (
          <option
            key={option.value} value={option.value}
            className='bg-neutral-900 active:bg-neutral-800'
          >{option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
