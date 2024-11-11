import React, { useState } from "react";
// Import the global context and navigation hook
import { useGlobalContext } from "../../Context.js";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  // Destructure setSearchTerm from the global context
  const { setSearchTerm } = useGlobalContext();
  // State to manage the search query
  const [query, setQuery] = useState("");
  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the search term in the global context
    setSearchTerm(query);
    // Navigate to the book list page
    navigate("/book-list");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
