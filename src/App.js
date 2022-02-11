import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './About';
import Home from './Home';
import User from './User';
import Users from './Users';

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id/" element={<User />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
