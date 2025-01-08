import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Header;
