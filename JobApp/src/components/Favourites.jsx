import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeCompanyFromFavorites } from '../redux/FavSlice';

const FavoritesPage = () => {
  const favoriteCompanies  = useSelector((state) => state.favorites.companies);
  const dispatch = useDispatch();

  const handleRemoveCompany = (companyId) => {
    dispatch(removeCompanyFromFavorites(companyId));
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favorite Companies</h1>
          {favoriteCompanies.map((company) => (
            <div key={company.id}>
              <p><strong>ID:</strong> {company.id}</p>
              <p><strong>Name:</strong> {company.name}</p>
              <Button onClick={() => handleRemoveCompany(company.id)}>
                Remove from Favorites
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesPage;