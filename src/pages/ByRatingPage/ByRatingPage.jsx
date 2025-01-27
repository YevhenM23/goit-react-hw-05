import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesByRating } from "../../services/api";
import s from "./ByRatingPage.module.css";

const ByRatingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesByRating = async () => {
      try {
        const moviesByRating = await fetchMoviesByRating();
        setMovies(moviesByRating.results || []);
      } catch (error) {
        console.error("Failed to fetch movies by rating", error);
      }
    };
    getMoviesByRating();
  }, []);

  return (
    <div>
      <h1 className={s.title}>Movies By Rating</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default ByRatingPage;
