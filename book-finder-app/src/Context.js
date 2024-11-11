import React, { useState, useContext, useEffect, useCallback } from "react";

// URL for fetching books data
const URL = "https://openlibrary.org/search.json?title=";

// Create a context for the app
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State variables
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [error, setError] = useState(null); // New state for error handling

  // Function to fetch books data
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      if (!response.ok) throw new Error("Failed to fetch data.");
      const data = await response.json();
      const { docs } = data;

      if (docs && docs.length > 0) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            authors: author_name || ["Unknown Author"],
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year || "N/A",
            title: title || "No Title",
          };
        });

        setBooks(newBooks);
        setResultTitle(newBooks.length > 1 ? "Your Search Result" : "No Search Result Found!");
      } else {
        setBooks([]);
        setResultTitle(`No results found for '${searchTerm}'`);
      }
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        error, // Provide error state to context
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
