import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../services/api";
import TrendMovies from "../../components/TrendMovies/TrendMovies";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    };
    getMoviesData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <TrendMovies movies={movies} />
    </div>
  );
};

export default HomePage;
