import React from "react";
import LoaderImg from "../../Images/Loader.svg";
import "./loader.css";

// Functional component for a loading spinner
const Loader = () => (
  // Loader container with centered styling
  <div className="loader flex flex-c">
    
    {/* Loading spinner image */}
    <img src={LoaderImg} alt="Loading..." />
  </div>
);

export default Loader;
