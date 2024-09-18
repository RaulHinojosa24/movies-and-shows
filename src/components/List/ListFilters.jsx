import Select from '../UI/Select'
import GridIcon from '../../icons/GridIcon'
import ListIcon from '../../icons/ListIcon'
import VisibleIcon from '../../icons/VisibleIcon'
import HiddenIcon from '../../icons/HiddenIcon'
import SortAscIcon from '../../icons/SortAscIcon'
import SortDescIcon from '../../icons/SortDescIcon'

export default function ListFilters ({
  setPosterMode,
  setCommentsVisible,
  setSortValue,
  setSortDirection,
  posterMode,
  commentsVisible,
  sortValue,
  sortDirection,
  sortByProps
}) {
  return (
    <div className='flex gap-4 flex-wrap justify-center'>
      <button className='rounded custom-shadow-small px-2' onClick={() => setSortDirection(p => p === 'asc' ? 'desc' : 'asc')}>
        {sortDirection === 'asc'
          ? <SortAscIcon />
          : <SortDescIcon />}
      </button>
      <Select compact label='Ordenar por' options={sortByProps} onChange={(event) => setSortValue(event.target.value)} />
      <button
        onClick={() => setPosterMode(p => !p)}
        className='rounded custom-shadow-small flex items-center gap-2 py-1 px-3'
      >{posterMode ? <>Ver en lista <ListIcon /></> : <>Ver en cuadrícula <GridIcon /></>}
      </button>
      <button
        onClick={() => setCommentsVisible(p => !p)}
        className='rounded custom-shadow-small flex items-center gap-2 py-1 px-3'
      >{commentsVisible ? <>Ocultar comentarios <HiddenIcon /></> : <>Mostrar comentarios <VisibleIcon /></>}
      </button>
    </div>
  )
}
