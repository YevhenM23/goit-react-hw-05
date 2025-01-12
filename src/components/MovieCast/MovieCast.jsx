import { useEffect, useState } from "react";
import { fetchCast } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getCast = async () => {
      setLoading(true);
      try {
        const res = await fetchCast(movieId);
        setCast(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <p>
              {actor.name} as {actor.character}
            </p>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={actor.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
