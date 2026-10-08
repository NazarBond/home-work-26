import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { searchMovies } from "../../services/tmdbApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [inputValue, setInputValue] = useState(query);
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    searchMovies(query).then(setMovies);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return setSearchParams({});
    setSearchParams({ query: inputValue.trim() });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
