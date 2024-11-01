import { Link } from "react-router-dom";
import { addToStoredReadList } from "../utility/addToDb";

/* eslint-disable react/prop-types */
const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    yearOfPublishing,
    totalPages,
    rating,
    category,
    tags,
  } = book;

  const handleAddToReadList = (id) => {
    addToStoredReadList(id)
  }
  return (
    <div className="w-full mx-auto p-4 border rounded-lg">
      <img src={image} alt={bookName} className="rounded-lg h-[230px] w-full" />
      <div className="pt-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{bookName}</h2>
        <h3 className="text-md text-gray-600 mb-2">by {author}</h3>
        <p className="text-sm text-gray-500 mb-2">
          Published: {yearOfPublishing} || Pages: {totalPages}
        </p>
        <p className="text-gray-700 mb-2">
          Rating:
          <span className="text-yellow-500">
            {rating}
            {" ★ ".repeat(Math.round(rating))}
          </span>
        </p>
        <div className="flex justify-between items-center gap-2 flex-wrap mb-4">
          <span className="text-gray-500">
            Category: <strong>{category}</strong>
          </span>
          <span className="text-gray-500">
            Tags: <strong className="underline">{tags.join(" , ")}</strong>
          </span>
        </div>
        <hr className="border-2 border-dashed" />
        <div className="mt-4 flex gap-2 justify-center join w-full">
          <Link to={`/books/${bookId}`} className="btn w-1/2 join-item btn-primary text-white font-bold">
              Book Details
          </Link>
          <button onClick={()=>handleAddToReadList(bookId)} className="btn w-1/2 join-item btn-active font-bold">
            ★ List it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
