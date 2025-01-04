import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';


// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };



function App() {
  const url = 'https://image.tmdb.org/t/p/w500/f6c6719e16c9de35aff76efc601be72a.jpg'
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/moviedetailspage" className={buildLinkClass}>
          Movies
        </NavLink>
        <NavLink to="/moviespage" className={buildLinkClass}>
          Cast
        </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/moviedetailspage' element={<MovieDetailsPage /> } />
        <Route path='/moviespage' element={<MoviesPage /> } />
        <Route path='*' element={<NotFoundPage /> }/>
      </Routes>
    </>
  )
}

export default App
