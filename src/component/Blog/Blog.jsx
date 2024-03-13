import { IoBookmarksSharp } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, cover, author_img, title, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-5 space-y-2">
            <img className="w-full" src={cover} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-16">
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className="font-semibold">{author}</h4>
                        <p className="text-sm">{posted_date} </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span>{reading_time}</span> min read
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className="text-lg ml-2 text-red-600">
                        <IoBookmarksSharp />
                    </button>
                </div>
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>
                {hashtags.map((hash, index) =>
                    <span key={index}>
                        <a href="#"> #{hash} </a>
                    </span>)}
            </p>
            <button
                className="text-purple-800 font-semibold underline"
                onClick={() => handleMarkAsRead(id, reading_time)}
            >Mark as read
            </button>
        </div>
    )
}

export default Blog
