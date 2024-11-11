import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import BookList from "./Components/BookList/BookList";
import BookDetails from "./Components/BookDetails/BookDetails";

// Main App component
const App = () => {
  return (
    // BrowserRouter provides the routing context for the application
    <BrowserRouter>
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/" element={<HomePage />}>
          {/* Define the route for the about page */}
          <Route path="/about" element={<AboutPage />} />
          {/* Define the route for the book list page */}
          <Route path="/book-list" element={<BookList />} />
          {/* Define the route for the book details page with a dynamic id parameter */}
          <Route path="/book-details/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
