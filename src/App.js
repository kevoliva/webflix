import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Header from "./Header";
import Movie from "./Movie";
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
