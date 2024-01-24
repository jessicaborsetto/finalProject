import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { removeCompanyFromFavorites } from '../redux/FavSlice';
import FavoriteJob from './FavJobs';

const FavoritesPage = () => {
  const favoriteCompanies  = useSelector((state) => state.favorites.companies);
  // const dispatch = useDispatch();

  // const handleRemoveCompany = (companyId) => {
  //   dispatch(removeCompanyFromFavorites(companyId));
  // };

  return (
    <Container className="mainBox">
      <Row>
        <Col className="my-3">
          <h2 className='title'>Favorite Companies</h2>
          {/* {favoriteCompanies.map((company) => (
            <div key={company.id}>
              <p><strong>ID:</strong> {company.id}</p>
              <p><strong>Name:</strong> {company.name}</p>
              <Button onClick={() => handleRemoveCompany(company.id)} className='btnFav rounded-circle'>
              <i className="bi bi-heart-fill favIcon"></i>
              </Button>
            </div>
          ))} */}
          {favoriteCompanies.map((company) => (
            <FavoriteJob key={company.id} data={company} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesPage;
