import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendingMovies } from "../../services/tmdbApi";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
