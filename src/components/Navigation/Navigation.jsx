import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

import { RiMovie2Fill } from "react-icons/ri";
import { MdBroadcastOnHome } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className={css.navMenu}>
      <NavLink className={({ isActive }) => clsx(css.navLink, isActive && css.activeLink)} to="/">
        <div className={css.linkWrapper}>
          <MdBroadcastOnHome className={css.iconsWrapper} />
          Home
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.navLink, isActive && css.activeLink)}
        to="/movies"
      >
        <div className={css.linkWrapper}>
          <RiMovie2Fill className={css.iconsWrapper} />
          Movies
        </div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
