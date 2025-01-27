import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesByRating } from "../../services/api";
import s from "./ByRatingPage.module.css";

const ByRatingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesByRating = async () => {
      const moviesByRating = await fetchMoviesByRating();
      console.log(moviesByRating.results);

      setMovies(moviesByRating);
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
