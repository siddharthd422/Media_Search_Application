import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/SearchSlice';

const SearchBar = () => {
  const dispatch = useDispatch()

  const [text,setText] = useState('')

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(setQuery(text))
      setText('')
  }

  return (
    <div>
      <form onSubmit = {(e)=>{submitHandler(e)}} className='flex bg-gray-900 gap-5 px-10 py-14'>

        <input 
          required
          value= {text} 
          onChange={(e)=>{
            setText(e.target.value)
          }} 
          placeholder="search anything..." className='w-full text-xl border-2 border-red-500 px-6 py-3 rounded outline-none'> 
        </input>


        <button className='active:scale-95 text-xl border-2 border-red-500 px-6 py-3 rounded outline-none'>Search</button>

      </form>
    </div>
  );
}

export default SearchBar;
