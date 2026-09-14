import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import NavBar from "./components/NavBar"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
      
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>

      <ToastContainer/>

    </div>
  )
}

export default App

{/* <div className="h-screen w-full bg-gray-950 text-white">
      <button className = 'bg-green-400 px-4 py-2 m-5' onClick = {async ()=>{
        const data = await fetchPhotos('cats')
        console.log(data.results)
      }}>
        GET PHOTOS
      </button>

      <button className = 'bg-green-400 px-4 py-2 m-5' onClick = {async ()=>{
        const data = await fetchVideos('cats')
        console.log(data.videos)
      }}>
        GET VIDEOS
      </button>

      <button className = 'bg-green-400 px-4 py-2 m-5' onClick = {async ()=>{
        const data = await fetchGifs('cats')
        console.log(data.data.result)
      }}>
        GET GIFS
      </button>

    </div> */}
