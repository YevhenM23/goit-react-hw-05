import axios from "axios";

const API_KEY = "f6c6719e16c9de35aff76efc601be72a";

axios.defaults.baseURL = "https://api.themoviedb.org";

export const fetchPopularMovies = async () => {
  const { data } = await axios.get(`/3/movie/popular?api_key=${API_KEY}`);
  console.log(data.results);

  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/3/movie/${movieId}?api_key=${API_KEY}`);
  console.log(data);
  return data;
};
