import { NavLink, useLocation } from "react-router-dom";
import s from "./TrendMovies.module.css";

const TrendMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.movieGallery}>
      {movies.map((movie) => (
        <li className={s.movieItem} key={movie.id}>
          <h2 className={s.movieTitle}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </h2>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              className={s.moviePoster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TrendMovies;
