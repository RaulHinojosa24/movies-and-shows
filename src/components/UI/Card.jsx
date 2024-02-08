export default function Card ({ children, className = '' }) {
  let classes = 'rounded bg-neutral-800'
  classes += ' ' + className

  return <section className={classes}>{children}</section>
}
