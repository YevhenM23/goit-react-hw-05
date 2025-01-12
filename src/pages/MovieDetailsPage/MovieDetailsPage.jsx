import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
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
    <div className={s.detailsPage}>
      <Link to={location.state?.from || "/"}>Go Back</Link>
      <img
        className={s.detailsPoster}
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={film.title}
        width={300}
      />
      <h2 className={s.detailsTitle}>{film.title}</h2>
      <p className={s.detailsRelease}>Release Date: {film.release_date}</p>
      <p className={s.detailsRating}>Rating: {film.vote_average}</p>
      <p className={s.detailsVote}>Vote Average: {film.vote_average}</p>
      <p className={s.detailsOverview}>Overview: {film.overview}</p>
      <nav>
        <ul className={s.detailsList}>
          <li className={s.detailsLink}>
            <Link to="cast" movieId={movieId} state={location.state}>
              Cast
            </Link>
          </li>
          <li className={s.detailsLink}>
            <Link to="reviews" movieId={movieId} state={location.state}>
              Reviews
            </Link>
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
