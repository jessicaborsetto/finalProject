import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FavoritesPage from "./components/Favourites";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar data-bs-theme="dark" className="fixed-top navBar">
        <Container >
          <Navbar.Brand className="logo">Jobs4you	&#8482;</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className=" navLink">Home</Link>
            <Link to="/favorites" className="navLink">Favorites</Link> 
          </Nav>
        </Container>
      </Navbar>

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
