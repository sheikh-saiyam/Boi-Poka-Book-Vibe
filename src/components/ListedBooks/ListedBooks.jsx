import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../utility/addToDb";
import Book from "../Books/Book";
const ListedBooks = () => {
  const booksData = useLoaderData();
  const [readList, setReadList] = useState([]);
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = booksData.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleRatingSort = () => {
    const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
    setReadList(sortedReadList);
  };
  const handlePageNumberSort = () => {
    const sortedReadList = [...readList].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setReadList(sortedReadList);
  };
  const handleYearOfPublishingSort = () => {
    const sortedReadList = [...readList].sort(
      (a, b) => a.yearOfPublishing - b.yearOfPublishing
    );
    setReadList(sortedReadList);
  };
  return (
    <div>
      <h1 className="text-center font-bold my-4 text-5xl">Listed Books</h1>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
          <Tab>
            <ul
              tabIndex={0}
              className="dropdown-content flex gap-4 bg-base-100 rounded-box w-max"
            >
              <li onClick={handleRatingSort}>
                <a>Sort By Ratings</a>
              </li>
            </ul>
          </Tab>
          <Tab>
            <ul
              tabIndex={0}
              className="dropdown-content flex gap-4 bg-base-100 rounded-box w-max"
            >
              <li onClick={handlePageNumberSort}>
                <a>Sort By Pages Number</a>
              </li>
            </ul>
          </Tab>
          <Tab>
            <ul
              tabIndex={0}
              className="dropdown-content flex gap-4 bg-base-100 rounded-box w-max"
            >
              <li onClick={handleYearOfPublishingSort}>
                <a>Sort By Year Of Publishing</a>
              </li>
            </ul>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Read Books : {readList.length}</h2>
          <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book, idx) => (
              <Book key={idx} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist Books : {readList.length}</h2>
          <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book, idx) => (
              <Book key={idx} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book, idx) => (
              <Book key={idx} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book, idx) => (
              <Book key={idx} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book, idx) => (
              <Book key={idx} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
