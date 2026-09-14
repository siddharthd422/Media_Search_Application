
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CollectionsCard from "../components/CollectionsCard"
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch()

  const clearAll = () => {

    dispatch(clearCollection())
  }

  return (
    <div className=" overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-medium">
            Your Collection
          </h2>

          <button
            onClick={clearAll}
            className="active:scale-95 transition cursor-pointer border-2 border-red-500 px-5 py-2 text-lg font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div className="min-h-[70vh] flex justify-center items-center">
          <h2 className="text-5xl text-gray-300 font-medium">
            Collection is Empty
          </h2>
        </div>
      )}
      {/* {collection.length > 0 ? <div className="flex justify-center items-center mb-6">
        <h2 className="text-xl font-medium">
          Your Collection
        </h2>
        <button onClick={() => {
          clearAll()
        }} className="active:scale-95 transition cursor-pointer border-2 border-red-500 px-5 py-2 text-lg font-medium rounded">Clear Collection</button>
      </div> : <h2 className="text-5xl py-10 text-gray-300 text-center font-medium">
        Collection is Empty
      </h2>} */}

      <div className='flex justify-start w-full flex-wrap gap-6'>
        {collection.map((item, idx) => {
          return <div key={idx}>
            <CollectionsCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPage;
