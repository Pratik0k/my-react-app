import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Rating from "react-rating-stars-component";
import NavTourist from "./NavTourist";
// const cors = require('cors');
// app.use(cors());  // Allow all origins



export default function MainTourist() {
  const location = useLocation();
  const { heading, img, para, location: touristLocation } = location.state;

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  // Fetch reviews from the backend on component mount
  // Fetch reviews from the backend on component mount
useEffect(() => {
  const fetchReviews = async () => {
    try {
      // Dynamically fetch reviews for the specific tourist location
      const response = await axios.get(`http://localhost:3000/test/reviews/${touristLocation}`);
      console.log("data is fetching");
      console.log(response.data);
      setReviews(response.data); // Store the fetched reviews
      calculateAverageRating(response.data); // Calculate the average rating
    } catch (error) {
      console.log("Error fetch reviews:", error);
    }
  };

  fetchReviews(); // Call the fetch function
}, [touristLocation]);  // Re-fetch reviews whenever the touristLocation changes


  // Calculate average rating based on current reviews
  // Calculate average rating based on current reviews from the database
const calculateAverageRating = (reviewsData) => {
  // Check if there are any reviews
  if (reviewsData.length === 0) {
    setAverageRating(0);  // If no reviews, set average rating to 0
    return;
  }

  // Calculate the sum of all ratings
  const totalRating = reviewsData.reduce((sum, review) => sum + review.rating, 0);

  // Calculate the average rating (toFixed(1) limits it to one decimal place)
  const avgRating = (totalRating / reviewsData.length).toFixed(1);

  // Update the state with the calculated average rating
  setAverageRating(parseFloat(avgRating));  // Ensure the value is a number, not a string
};

  // Handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle form submission
  // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  if (rating === 0 || comment === "") {
    alert("Please provide both a rating and a comment.");
    return;
  }

  // Prepare the new review payload
  const newReview = { rating, comment, touristLocation };

  try {
    // Send the POST request to the backend
    const response = await axios.post('http://localhost:3000/test/reviews', newReview);
    
    // Update reviews state with the new review and recalculate the average rating
    const updatedReviews = [response.data, ...reviews]; // Add new review to the beginning of the array
    setReviews(updatedReviews); // Update reviews state
    calculateAverageRating(updatedReviews); // Recalculate average rating after adding new review
    setRating(0); // Reset rating input
    setComment(""); // Reset comment input
  } catch (error) {
    console.error("Error submitting the review:", error);
  }
};


  // Toggle description expansion
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Render the description with "Read More"
  const renderDescription = () => {
    const shortText = para.slice(0, 150); // Show first 150 characters
    return isExpanded ? para : `${shortText}...`;
  };

  return (
    <>
      <NavTourist />

      <div className="container mx-auto p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/2">
              <img
                src={img}
                alt={heading}
                className="rounded-xl shadow-xl object-cover w-full h-[360px]"
              />
            </div>
            <div className="mt-4 md:mt-0 md:w-1/2">
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center mb-2 h-[30px]">
                  <i className="fa-solid fa-location-dot mr-2 text-gray-500"></i>
                  <p className="text-gray-700">{touristLocation}</p>
                </div>
                <hr />
                <div className="flex items-center mb-2 h-[30px]">
                  <i className="fa-solid fa-dollar-sign mr-2 text-gray-500"></i>
                  <p className="text-gray-700">Free</p>
                </div>
                <hr />
                <div className="flex items-center mb-2 h-[30px]">
                  <i className="fa-solid fa-clock mr-2 text-gray-500"></i>
                  <p className="text-gray-700">24/7</p>
                </div>
                <hr />
                <div className="flex items-center h-[30px]">
                  <i className="fa-solid fa-earth-americas text-gray-500"></i>
                  <p className="text-gray-700">
                    <a href="https://mumbaicity.gov.in/tourist-place/gateway-of-india/" className="text-blue-600 ml-2">GatewayofIndia.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Average Rating */}
          <div className="flex flex-col mt-6">
            <div className="flex items-center">
              <Rating
                count={5}
                value={parseFloat(averageRating)}
                size={24}
                isHalf={true}
                edit={false}
                activeColor="#ffd700"
                color="#d1d5db"
                key={averageRating}
              />
              <span className="ml-2 text-gray-700">{averageRating} / 5</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4">
            <p className="text-gray-700 text-lg">{renderDescription()}</p>
            <button
              onClick={toggleExpanded}
              className="text-blue-600 mt-2 hover:underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </section>

        {/* Review Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Your Rating:</label>
              <Rating
                count={5}
                value={rating}
                onChange={handleRatingChange}
                size={30}
                isHalf={false}
                activeColor="#ffd700"
                color="#d1d5db"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Review:</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Write your review here..."
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>

          {/* Display Reviews */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              reviews.map((review) => (
                <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md" key={review._id}>
                  <div className="flex items-center mb-2">
                    <Rating
                      count={5}
                      value={parseFloat(review.rating)}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      color="#d1d5db"
                    />
                    <span className="ml-2 text-gray-700">{review.rating} / 5</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
