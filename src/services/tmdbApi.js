import axios from "axios";

const API_KEY = "ВСТАВТЕ_СВІЙ_API_KEY_ТУТ";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const getTrendingMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
