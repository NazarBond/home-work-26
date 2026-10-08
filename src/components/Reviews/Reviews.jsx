import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/tmdbApi";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews.length) return <p>We don't have any reviews for this movie.</p>;

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id} style={{ marginBottom: "16px" }}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
