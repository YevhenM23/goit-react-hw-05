import { NavLink, useLocation } from "react-router-dom";

const TrendMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </h2>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TrendMovies;
