export default function ListItem ({ name, description, count, favCount }) {
  return (
    <div className='py-2 px-4 custom-shadow-small rounded'>
      <div className='flex gap-2 items-end'>
        <h3 className='font-semibold text-lg'>{name}</h3>
        <span className='text-neutral-400 italic'>({count} elementos)</span>
        <span className='text-neutral-400 italic'>({favCount} favoritos)</span>
      </div>
      {description !== '' &&
        <p className='text-ellipsis whitespace-nowrap overflow-hidden'>{description}</p>}
    </div>
  )
}
