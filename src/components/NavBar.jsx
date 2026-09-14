import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-10  '>
            <Link className='font-medium text-2xl' to='/'>Media Search Application</Link>

            <div className='flex gap-5 items-center'>
                <Link className='text-base font-medium active:scale-95 cursor-pointer rounded px-4 py-2 border-2 border-red-500' to='/'>Search</Link>
                <Link className='text-base font-medium active:scale-95 cursor-pointer rounded px-4 py-2 border-2 border-red-500' to='/collection' >Collection</Link>
            </div>
      </div>
  );
}

export default NavBar;
