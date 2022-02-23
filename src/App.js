import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Header from "./Header";
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path={routes.home} element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
