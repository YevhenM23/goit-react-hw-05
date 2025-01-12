import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";
import s from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
