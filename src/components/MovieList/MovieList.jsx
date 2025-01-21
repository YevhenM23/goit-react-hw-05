import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import { BiBarChartAlt } from "react-icons/bi";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.movieGallery}>
      {movies.map((movie) => (
        <li className={s.movieItem} key={movie.id}>
          <h2 className={s.movieTitle}>
            <NavLink className={s.titleMovie} to={`/movies/${movie.id}`} state={{ from: location }}>
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
          <div className={s.ratingWrapper}>
            <BiBarChartAlt className={s.ratingIcon} />
            <p className={s.rating}>{movie.vote_average}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
