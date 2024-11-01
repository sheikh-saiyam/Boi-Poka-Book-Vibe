import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

//   console.log(books);
  return (
    <div className="pb-24">
      <h1 className="text-center text-4xl font-bold">Books</h1>
      <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3">
        {
            books.map((book ,idx)=> <Book book={book} key={idx}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
