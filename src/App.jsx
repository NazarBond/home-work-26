import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

export const App = () => {
  return (
    <div style={{ padding: "0 20px" }}>
      <header
        style={{
          padding: "20px 0",
          borderBottom: "1px solid #ccc",
          marginBottom: "20px",
        }}
      >
        <nav style={{ display: "flex", gap: "20px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: "bold",
              textDecoration: "none",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: "bold",
              textDecoration: "none",
            })}
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
