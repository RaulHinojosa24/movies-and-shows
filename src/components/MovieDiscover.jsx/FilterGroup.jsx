export default function FilterGroup ({ children, title }) {
  return (
    <div>
      <details className='custom-shadow-small rounded divide-y-1 divide-neutral-800 [&>*]:p-2'>
        <summary className='font-semibold pb-2 text-lg'>{title}</summary>
        <div>{children}</div>
      </details>
    </div>
  )
}
