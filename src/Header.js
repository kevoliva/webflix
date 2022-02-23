import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./Header.style";

function Header() {
  const classes = useStyles();
  const favorites = useSelector((state) => state.favorites);
  return (
    <header className={classes.root}>
      <img className={classes.logo} src="logo32.png" alt="Webflix logo" />
      <h1 className={classes.title}>Webflix</h1>
      <nav className={classes.nav}>
      <Link className={classes.link} to="/">
          Accueil
        </Link>
        <Link className={classes.link} to="/favorites">
          {`Favorites (${favorites.length})`}
        </Link>
      </nav>
    </header>
  );
}

Header.defaultProps = {
    favorites: [],
  };

export default Header;