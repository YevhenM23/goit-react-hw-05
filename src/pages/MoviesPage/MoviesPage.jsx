import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { NavLink, useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const results = await fetchMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      setSearchParams({});
      setMovies([]);
      return;
    }

    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchForm handleChangeQuery={handleChangeQuery} query={query} />
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>
                <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
              </h2>
              <NavLink to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found. Try searching for something else!</p>
      )}
    </div>
  );
};

export default MoviesPage;
