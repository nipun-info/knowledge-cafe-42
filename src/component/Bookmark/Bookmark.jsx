
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
  return (
    <div className="bg-gray-100 m-2 p-2 rounded-lg">
        <h3 className="text-sm font-semibold" > {title} </h3>
    </div>
  )
}

export default Bookmark
