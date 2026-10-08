import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../services/tmdbApi";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading movie details...</div>;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <div>
      <Link to={backLinkHref.current}>
        <button type="button">← Go back</button>
      </Link>

      <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
        <img src={posterUrl} alt={movie.title} width="300" />
        <div>
          <h2>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((g) => g.name).join(", ")}</p>
        </div>
      </div>

      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
