import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import { MdOutlineImageNotSupported } from "react-icons/md";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      setLoading(true);
      try {
        const results = await fetchMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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
      {loading && <p>Loading...</p>}
      {movies.length > 0 ? (
        <ul className={s.filmList}>
          {movies.map((movie) => (
            <li className={s.filmItem} key={movie.id}>
              <h2 className={s.filmTitle}>
                <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </NavLink>
              </h2>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.poster_path ? (
                  <img
                    className={s.filmPoster}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <div
                    style={{
                      width: "200px",
                      height: "300px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ccc",
                      borderRadius: "8px",
                    }}
                  >
                    <MdOutlineImageNotSupported size={50} color="#555" />
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        !loading && query && <p>No movies found. Try searching for something else!</p>
      )}
    </div>
  );
};

export default MoviesPage;
