import { NavLink } from "react-router-dom";

const TrendMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </h2>
          <NavLink to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TrendMovies;
