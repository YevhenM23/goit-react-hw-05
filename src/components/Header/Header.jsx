import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <a href="/" style={{ display: "inline-block", textDecoration: "none" }}>
        <img
          src="/src/logo.svg/logomak_logo.png"
          alt="logo: filmec"
          width={90}
          height={60}
          className={s.logo}
        />
      </a>
      <Navigation />
    </header>
  );
};

export default Header;

{
  /* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="50"
          viewBox="0 0 200 50"
          role="img"
          aria-label="Filmec logo"
        >
          <rect
            x="10"
            y="10"
            width="40"
            height="30"
            fill="#1E1E1E"
            stroke="#FF6F00"
            strokeWidth="2"
            rx="4"
          />
          <rect x="12" y="12" width="36" height="6" fill="#FF6F00" />
          <line x1="12" y1="18" x2="48" y2="18" stroke="#FFFFFF" strokeWidth="1.5" />

          <text
            x="60"
            y="32"
            fontFamily="Arial, sans-serif"
            fontSize="18"
            fill="#FFFFFF"
            fontWeight="bold"
          >
            filmec
          </text>
        </svg> */
}
