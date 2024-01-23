import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FavoritesPage from "./components/Favourites";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/favorites">Favorites</Link> 
      </li>
    </ul>
  </nav>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<FavoritesPage />}  />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
