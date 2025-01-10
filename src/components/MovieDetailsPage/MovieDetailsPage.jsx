import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const film = await fetchMovieDetails(movieId);
      setFilm(film);
    };
    getData();
  }, [movieId]);

  if (!film) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={film.title}
        width={300}
      />
      <h2>{film.title}</h2>
      <p>Release Date: {film.release_date}</p>
      <p>Rating: {film.vote_average}</p>
      <p>Vote Average: {film.vote_average}</p>
      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
