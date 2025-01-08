import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
