import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/SearchSlice';

const Tabs = ()=>{
  const tabs = ['photos','videos']
  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex gap-5 p-10'>
      {
        tabs.map(function(elem,idx){
          return <button 
                    className={` ${(activeTab== elem ? 'bg-red-600' : 'bg-gray-600')} font-semibold transistion cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
                    key={idx}
                    onClick={()=>{ dispatch(setActiveTabs(elem)) }}>
                    {elem}
                  </button>
        })
      }
    </div>
  )
}
export default Tabs;
