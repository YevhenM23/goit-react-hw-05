import axios from "axios";

const API_KEY = "f6c6719e16c9de35aff76efc601be72a";

// axios.defaults.baseURL = "https://api.themoviedb.org";

export const fetchPopularMovies = async () => {
  const { data } = await axios.get(`/api/movie/popular?api_key=${API_KEY}`);
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/api/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const fetchMoviesByQuery = async (query) => {
  if (!query || query.trim() === "") {
    throw new Error("Query cannot be empty");
  }
  const { data } = await axios.get(`/api/search/movie?api_key=${API_KEY}&query=${query}`);
  return data.results;
};

export const fetchMoviesByRating = async () => {
  const { data } = await axios.get(`/api/movie/top_rated?api_key=${API_KEY}`);
  console.log(data.results);

  return data.results;
};

export const fetchCast = async (movieId) => {
  if (!movieId) {
    throw new Error("Movie ID is required");
  }
  const { data } = await axios.get(`/api/movie/${movieId}/credits?api_key=${API_KEY}`);

  return data.cast || [];
};

export const fetchReviews = async (movieId) => {
  if (!movieId) {
    throw new Error("Movie ID is required");
  }
  const { data } = await axios.get(`/api/movie/${movieId}/reviews?api_key=${API_KEY}`);
  console.log(data.results);

  return data.results || [];
};
