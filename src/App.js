import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

import Home from './Home';
import Header from "./Header";
import Movie from "./Movie";
import routes from './routes';

const queryClient = new QueryClient();

function App() {
  const [favorites, setFavorites] = useState([]);
  const addToFavorite = (id) => (event) => {
    event.preventDefault();
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Header favorites={favorites} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route
              path="/"
              element={
                <Home addToFavorite={addToFavorite} favorites={favorites} />
              }
            />
            <Route
              path="/movies/:id"
              element={
                <Movie addToFavorite={addToFavorite} favorites={favorites} />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
