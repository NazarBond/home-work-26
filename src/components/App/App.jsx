import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Nav, StyledLink, Container } from "./App.styled";

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(() =>
  import("../../pages/MovieDetails/MovieDetails")
);
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export const App = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>

      <Container>
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
      </Container>
    </div>
  );
};
