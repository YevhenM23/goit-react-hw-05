import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesByRating } from "../../services/api";
import s from "./ByRatingPage.module.css";

const ByRatingPage = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const getMoviesByRating = async () => {
      try {
        const moviesByRating = await fetchMoviesByRating();
        if (Array.isArray(moviesByRating)) setRatings(moviesByRating);
      } catch (error) {
        console.error("Failed to fetch movies by rating", error);
      }
    };
    getMoviesByRating();
  }, []);

  return (
    <div>
      <h1 className={s.title}>Movies By Rating</h1>
      <MovieList movies={ratings} />
    </div>
  );
};

export default ByRatingPage;
