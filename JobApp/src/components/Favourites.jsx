import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FavoriteJob from './FavJobs';

const FavoritesPage = () => {
  //selector per la selezione dello stato dallo store (FavSlice.js)
  const favoriteCompanies  = useSelector((state) => state.favorites.companies);

  return (
    <Container className="mainBox">
      <Row>
        <Col className="my-3">
          <h2 className='title'>Favorite Companies</h2>
            {/* Mappa l'array di aziende preferite e mostrale col componente FavoriteJob */}
          {favoriteCompanies.map((company) => (
            <FavoriteJob key={company.id} data={company} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesPage;
