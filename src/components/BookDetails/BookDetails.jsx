import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    // bookId,
    bookName,
    author,
    image,
    yearOfPublishing,
    totalPages,
    rating,
    category,
    tags,
    review,
  } = book;

  const handleAddToReadList = (id) => {
    addToStoredReadList(id)
  }
  return (
    <div className="space-y-4 lg:flex lg:space-y-0 justify-center items-center py-10 w-full gap-8 bg-base-200 rounded-xl p-6 mt-8 mb-24">
      <div className="">
        <img className="lg:h-[560px] text-center mx-auto lg:mx-0" src={image} alt="" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">{bookName}</h2>
        <h3 className="text-lg text-gray-600 mb-2">by {author}</h3>
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
        <div className="flex flex-col space-y-2 mb-4">
          <span className="text-gray-500">
            Category: <strong>{category}</strong>
          </span>
          <span className="text-gray-500">
            Tags: <strong className="underline">{tags.join(" , ")}</strong>
          </span>
        </div>
        <hr className="border-2 border-dashed" />
        <div className="my-4">
          <p>{review}</p>
        </div>
        <div className="mt-4 flex gap-2 justify-center join w-full">
          <button onClick={()=>handleAddToReadList(bookId)} className="btn w-1/2 bg-transparent border-2 join-item btn-active font-bold">
            Read
          </button>
          <button className="btn w-1/2 join-item btn-active font-bold">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
