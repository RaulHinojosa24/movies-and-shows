export default function Select ({ name, options, ...props }) {
  return (
    <select
      name={name} id={name} {...props} defaultValue='release-date'
      className='bg-transparent rounded py-1 px-2 custom-shadow-small cursor-pointer'
    >
      {options.map((option) => (
        <option
          key={option.value} value={option.value}
          className='bg-neutral-950 active:bg-neutral-800'
        >{option.label}
        </option>
      ))}
    </select>
  )
}
