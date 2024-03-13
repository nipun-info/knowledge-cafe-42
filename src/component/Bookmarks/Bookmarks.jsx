import Bookmark from "../Bookmark/Bookmark"


const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="w-1/3 bg-gray-300">
            <div className="text-center text-purple-800 p-2 border-2 bg-purple-300 rounded-2xl">
                <h3>Spent time on read : {readingTime} min</h3>
            </div>
            <h2 className="text-xl text-center font-semibold">Bookmarks: {bookmarks.length} </h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark
                    key={index}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    )
}

export default Bookmarks
