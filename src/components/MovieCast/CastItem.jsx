import DefaultProfileImage from '../../assets/default-user.png'

export default function CastItem ({ image, primary, secondary }) {
  return (
    <div className='flex gap-6'>
      <div className='aspect-[5/6] flex-shrink-0 h-20 overflow-hidden grid place-items-center rounded '>
        {image && <img loading='lazy' src={image} alt={'Foto de perfil de ' + primary} />}
        {!image && <img loading='lazy' src={DefaultProfileImage} alt={'Foto de perfil de ' + primary + ' no disponible'} className='h-full object-cover' />}
      </div>
      <div className='flex flex-col justify-center'>
        <p className='font-semibold w-fit'>{primary}</p>
        <p>{secondary}</p>
      </div>
    </div>
  )
}
