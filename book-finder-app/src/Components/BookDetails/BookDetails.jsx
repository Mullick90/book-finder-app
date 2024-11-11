import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../Images/Book cover not avaliable.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Base URL for fetching book details by title
const URL = "https://openlibrary.org/search.json?title=";

// Functional component for displaying details of a specific book
const BookDetails = () => {
  // Retrieve the `id` parameter from the URL
  const { id } = useParams();
  
  // State for loading status and book data
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  
  // Hook for navigation functionality
  const navigate = useNavigate();

  // Fetch book details when the component mounts or when `id` changes
  useEffect(() => {
    setLoading(true);
    
    // Asynchronous function to fetch book details from the API
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        // If data exists, destructure and reformat it
        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          
          // Construct a new book object with formatted data
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          
          // Update the `book` state with the new book object
          setBook(newBook);
        } else {
          setBook(null); // Set `book` to null if no data is found
        }
        
        setLoading(false); // End loading state
      } catch (error) {
        console.log(error);
        setLoading(false); // End loading state on error
      }
    }
    
    getBookDetails();
  }, [id]);

  // Show loading spinner if `loading` is true
  if (loading) return <Loading />;

  return (
    // Main section for displaying book details
    <section className="book-details">
      <div className="container">
        
        {/* Button to navigate back to the book list */}
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        {/* Displaying the book details */}
        <div className="book-details-content grid">
          
          {/* Book cover image */}
          <div className="book-details-img">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          
          {/* Book information */}
          <div className="book-details-info">
            
            {/* Book title */}
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            
            {/* Book description */}
            <div className="book-details-item description">
              <span>{book?.description}</span>
            </div>
            
            {/* Subject places */}
            <div className="book-details-item">
              <span className="fw-6">Subject Places: </span>
              <span className="text-italic">{book?.subject_places}</span>
            </div>
            
            {/* Subject times */}
            <div className="book-details-item">
              <span className="fw-6">Subject Times: </span>
              <span className="text-italic">{book?.subject_times}</span>
            </div>
            
            {/* Subjects */}
            <div className="book-details-item">
              <span className="fw-6">Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
