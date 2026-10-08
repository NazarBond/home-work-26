import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/tmdbApi";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  if (!cast.length)
    return <p>We don't have any cast information for this movie.</p>;

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} style={{ marginBottom: "12px" }}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : "https://via.placeholder.com/100x150?text=No+Photo"
            }
            alt={name}
            width="100"
          />
          <p>
            <strong>{name}</strong>
          </p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
