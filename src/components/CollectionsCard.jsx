import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";
import {removeToast} from "../redux/features/collectionSlice"

const CollectionsCard = ({item}) => {
  const dispatch = useDispatch()

  const removeFromCollection = (item)=>{
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }

  return (
    <div className='w-[22vw] relative h-80 bg-white rounded-xl overflow-hidden'>
      
      <a className='h-full' target="_blank" href={item.url}>
        {item.type == 'photo' ? <img className = 'h-full w-full object-cover object-center' src={item.src} alt=""/>:''}
        {item.type == 'video' ? <video className = 'h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''}
      </a>
      
      <div id="bottom" className='flex justify-between items-center w-full gap-2 px-4 py-6 absolute bottom-0 text-white'> 
        <h2 className='h-14 overflow-hidden text-lg font-semibold capitalize'>{item.title}</h2>
        <button onClick={()=>{
            removeFromCollection(item)
        }} className='bg-red-600 active:scale-95 cursor-pointer text-white rounded px-3 py-1 font-medium '>Remove</button>

      </div>
    </div>
  );
}

export default CollectionsCard;
