import { Link } from "react-router-dom";

import useStyles from "./Header.style";

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <img className={classes.logo} src="logo32.png" alt="Webflix logo" />
      <h1 className={classes.title}>Webflix</h1>
      <nav className={classes.nav}>
        <Link to="/">Accueil</Link>
      </nav>
    </header>
  );
}

export default Header;