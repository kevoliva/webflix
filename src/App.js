import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './About';
import Home from './Home';
import User from './User';
import Users from './Users';
import routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">À propos</Link>
          <Link to="/users?q=1">Utilisateurs</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.user} element={<User />} />
          <Route path={routes.users} element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
