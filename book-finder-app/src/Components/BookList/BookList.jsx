import React from "react";
import PropTypes from "prop-types";
import "./BookList.css";
import { useGlobalContext } from "../../Context";
import Loader from "../Loader/Loader";

// Functional component to display a list of books
const BookList = () => {
  // Get loading status and books data from context
  const { loading, books } = useGlobalContext();
  console.log(loading, books);

  // Show loader while data is being fetched
  if (loading) {
    return <Loader />;
  }

  return (
    // Main container for the book list
    <div className="book-list">
      
      {/* Check if books are available, map and display each book; otherwise, show "No books found" message */}
      {books?.length > 0 ? (
        books.map((book, index) => {
          const { title, authors, first_publish_year } = book;
          return (
            <div key={index} className="book-item">
              
              {/* Book title */}
              <h3 className="book-title">{title}</h3>
              
              {/* Book authors, formatted as a comma-separated list */}
              <p className="book-authors">
                Author(s):{" "}
                {Array.isArray(authors) ? authors.join(", ") : "Unknown Author"}
              </p>
              
              {/* Book publication year */}
              <p className="book-year">
                Published Year: {first_publish_year ?? "N/A"}
              </p>
            </div>
          );
        })
      ) : (
        // Message if no books are found
        <p className="no-books">No books found.</p>
      )}
    </div>
  );
};

// Prop types for the component (note: `loading` and `books` props are received from context, so we can remove this)
BookList.propTypes = {
  loading: PropTypes.bool,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      first_publish_year: PropTypes.number,
    })
  ),
};

export default BookList;
