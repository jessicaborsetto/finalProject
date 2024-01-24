import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FavoritesPage from "./components/Favourites";
import ErrorPage from "./pages/page404";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Footer from "./components/Footer";


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar data-bs-theme="dark" className="fixed-top navBar">
        <Container >
          <Link to="/" className="logo">Jobs4you	&#8482;</Link>
          <Nav className="me-auto d-flex justify-content-between">
            <div>
            <Link to="/" className=" navLink">Home</Link>
            <Link to="/favorites" className="navLink">Favorites</Link> 
            </div>
          </Nav>
          <Link to="/404" className="account">
            <p className="d-none d-md-block">Log in </p>
            <i className="bi bi-person-circle"></i>
          </Link>
          
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<FavoritesPage />}  />
        {/* <Route path="/404" element={<ErrorPage />}  /> */}
        <Route path="/404" element={<ErrorPage />} />
      </Routes>

    <Footer></Footer>
    <h6>Copyright &#169; 2024 | All Rights Reserved</h6>

    </BrowserRouter>
    
    
    </>
  );
}

export default App;
