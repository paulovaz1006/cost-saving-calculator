const ListTab = ({clickHandler, tabSelected}) => (
  <ul className="tab-list justify-between flex">
    <li className={`text-center w-full cursor-pointer p-2 ${tabSelected === 'phoneTag' && 'active'}`} onClick={() => clickHandler('phoneTag')}>Phone tag</li>
    <li className={`text-center w-full cursor-pointer p-2 ${tabSelected === 'abandonedCalls' && 'active'}`} onClick={() => clickHandler('abandonedCalls')}>Abandoned calls</li>
    <li className={`text-center w-full cursor-pointer p-2 ${tabSelected === 'noShows' && 'active'}`} onClick={() => clickHandler('noShows')}>No-shows</li>
  </ul>
)

export default ListTab;